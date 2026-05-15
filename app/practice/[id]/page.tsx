'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { articleData } from '@/data/questions'; 

export default function PracticePage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (qId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  const handleSubmit = () => {
    localStorage.setItem('practiceAnswers', JSON.stringify(answers));
    router.push('/result');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-sm min-h-screen">
      <h1 className="text-2xl font-bold mb-8 border-b pb-4">{articleData.title}</h1>
      
      <div className="space-y-10">
        {Object.entries(articleData.questions).map(([qId, q]) => (
          <div key={qId} className="group">
            <div className="font-semibold text-lg mb-4 text-gray-800">
              {qId}. {q.text}
            </div>
            
            <div className="grid grid-cols-1 gap-3 pl-4">
              {Object.entries(q.options).map(([key, value]) => {
                // 检测是否为判断题 (TFNG)
                const isYesNo = Object.values(q.options).some(v => 
                  ['YES', 'NO', 'NOT GIVEN', 'TRUE', 'FALSE'].includes((v as string).toUpperCase())
                );
                
                return (
                  <label key={key} className="flex items-center p-3 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name={`question-${qId}`}
                      className="w-4 h-4 text-blue-600"
                      onChange={() => handleAnswer(qId, key)}
                      checked={answers[qId] === key}
                    />
                    {/* 核心修复：添加类型断言 (as string) 解决 ReactNode 报错 */}
                    <span className="ml-3 text-gray-700">
                      {isYesNo ? (value as string) : `${key}. ${value as string}`}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={handleSubmit}
        disabled={Object.keys(answers).length === 0}
        className="w-full mt-12 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        提交并查看分析结果
      </button>
    </div>
  );
}
