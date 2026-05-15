'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

// 同义替换题库（可以从 questions.ts 扩展）
const synonymPairs = [
  { left: "consolidate", right: "strengthen" },
  { left: "not necessarily", right: "not always" },
  { left: "rapid", right: "fast" },
  { left: "urbanization", right: "growth of cities" },
  { left: "hyper-vigilant", right: "highly alert" },
  { left: "altered", right: "changed" },
  { left: "contagious", right: "spreadable" },
  { left: "justified", right: "reasonable" },
  { left: "precaution", right: "preventive measure" },
  { left: "induce", right: "cause" },
];

export default function MicroTrainingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const skillId = searchParams.get('skill') || 'paraphrase';
  
  const [cards, setCards] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [message, setMessage] = useState('');
  const [completed, setCompleted] = useState(false);

  // 初始化游戏：打乱卡片
  useEffect(() => {
    const leftCards = synonymPairs.map((pair, idx) => ({
      id: `L${idx}`,
      text: pair.left,
      type: 'left',
      pairId: idx,
    }));
    const rightCards = synonymPairs.map((pair, idx) => ({
      id: `R${idx}`,
      text: pair.right,
      type: 'right',
      pairId: idx,
    }));
    
    const shuffled = [...leftCards, ...rightCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  const handleCardClick = (card) => {
    if (completed) return;
    if (matchedPairs.includes(card.pairId)) return;

    if (selectedLeft === null) {
      if (card.type === 'left') {
        setSelectedLeft(card);
      } else {
        setMessage('请先点击左侧的单词');
        setTimeout(() => setMessage(''), 1000);
      }
      return;
    }

    if (card.type === 'right') {
      if (selectedLeft.pairId === card.pairId) {
        setMatchedPairs([...matchedPairs, card.pairId]);
        setSelectedLeft(null);
        setMessage('✅ 配对成功！');
        setTimeout(() => setMessage(''), 800);
      } else {
        setMessage(`❌ 配对失败：“${selectedLeft.text}” 不等于 “${card.text}”`);
        setSelectedLeft(null);
        setTimeout(() => setMessage(''), 1500);
      }
    } else {
      setSelectedLeft(card);
    }
  };

  useEffect(() => {
    if (matchedPairs.length === synonymPairs.length && synonymPairs.length > 0) {
      setCompleted(true);
      
      const saved = localStorage.getItem('skillTreeData');
      if (saved) {
        let data = JSON.parse(saved);
        const skillIndex = data.findIndex(s => s.id === skillId);
        if (skillIndex !== -1) {
          data[skillIndex].exp += 15;
          if (data[skillIndex].exp >= 100) {
            data[skillIndex].level += Math.floor(data[skillIndex].exp / 100);
            data[skillIndex].exp = data[skillIndex].exp % 100;
          }
          localStorage.setItem('skillTreeData', JSON.stringify(data));
        }
      }
    }
  }, [matchedPairs, skillId]);

  const getCardStyle = (card) => {
    if (matchedPairs.includes(card.pairId)) {
      return 'bg-green-200 line-through opacity-50 cursor-not-allowed';
    }
    if (selectedLeft?.id === card.id) {
      return 'bg-blue-200 border-blue-500 shadow-lg';
    }
    return 'bg-white hover:bg-gray-50';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-4 mb-6 flex justify-between items-center">
          <Link href="/skill-tree" className="text-blue-600 hover:underline">
            ← 返回能力地图
          </Link>
          <h1 className="text-xl font-bold text-blue-600">同义替换消消乐</h1>
          <div className="w-20" />
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-6 text-center text-gray-700">
          🎮 点击左侧单词，再点击右侧匹配的同义替换词
        </div>

        {message && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            {message}
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex justify-between items-center">
            <span>进度</span>
            <span className="font-bold text-blue-600">
              {matchedPairs.length} / {synonymPairs.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-blue-600 rounded-full h-2 transition-all duration-300"
              style={{ width: `${(matchedPairs.length / synonymPairs.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold mb-4 text-center text-blue-600">📖 原文单词</h2>
            <div className="space-y-3">
              {cards
                .filter(c => c.type === 'left')
                .map(card => (
                  <button
                    key={card.id}
                    onClick={() => handleCardClick(card)}
                    disabled={matchedPairs.includes(card.pairId)}
                    className={`w-full p-3 rounded-lg border text-left transition ${getCardStyle(card)}`}
                  >
                    {card.text}
                  </button>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold mb-4 text-center text-green-600">🔄 同义替换</h2>
            <div className="space-y-3">
              {cards
                .filter(c => c.type === 'right')
                .map(card => (
                  <button
                    key={card.id}
                    onClick={() => handleCardClick(card)}
                    disabled={matchedPairs.includes(card.pairId)}
                    className={`w-full p-3 rounded-lg border text-left transition ${getCardStyle(card)}`}
                  >
                    {card.text}
                  </button>
                ))}
            </div>
          </div>
        </div>

        {completed && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 text-center max-w-md">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-2">训练完成！</h2>
              <p className="text-gray-600 mb-4">
                同义替换能力 +15 经验
              </p>
              <Link
                href="/skill-tree"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                返回能力地图
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
