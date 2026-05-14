// app/practice/[id]/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { articleData } from '@/data/questions';

export default function PracticePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const questionIds = Object.keys(articleData.questions);
  const totalQuestions = questionIds.length;

  const handleAnswer = (qId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // 存储答案到 localStorage
    localStorage.setItem('practiceAnswers', JSON.stringify(answers));
    router.push('/result');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部栏 */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">IELTS-Reader-Pro</h1>
          <div className="text-right">
            <div className="text-sm text-gray-500">已答题: {Object.keys(answers).length}/{totalQuestions}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 左侧：文章 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">{articleData.title}</h2>
            {Object.entries(articleData.paragraphs).map(([para, content]) => (
              <div key={para} className="mb-4">
                <h3 className="font-bold text-blue-600 mb-1">段落 {para}</h3>
                <p className="text-gray-700 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>

          {/* 右侧：题目 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">题目</h2>
            {questionIds.map((qId, idx) => {
              const q = articleData.questions[Number(qId)];
              if (!q) return null;
              
              // 判断选项格式
              const isYesNo = q.options.A && ['YES', 'NO', 'NOT GIVEN'].includes(q.options.A);
              
              return (
                <div key={qId} className="mb-6 pb-4 border-b last:border-0">
                  <div className="font-medium mb-2">
                    {idx + 1}. {q.text}
                  </div>
                  <div className="space-y-2 pl-4">
                    {Object.entries(q.options).map(([key, value]) => (
                      <label key={key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`q${qId}`}
                          value={key}
                          onChange={() => handleAnswer(qId, key)}
                          checked={answers[qId] === key}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">
                          {isYesNo ? value : `${key}. ${value}`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}

            <button
  onClick={handleSubmit}
  className={`w-full py-3 rounded-lg font-semibold transition ${
    Object.keys(answers).length > 0
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
  }`}
  disabled={Object.keys(answers).length === 0}
>
  提交答案 {Object.keys(answers).length}/{totalQuestions} 题已答
</button>
          </div>
        </div>
      </div>
    </div>
  );
}