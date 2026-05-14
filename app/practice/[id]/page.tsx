// @ts-nocheck
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { articleData } from '@/data/questions';

export default function PracticePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questionIds = Object.keys(articleData.questions);
  const totalQuestions = questionIds.length;

  const handleAnswer = (qId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const handleSubmit = () => {
    localStorage.setItem('practiceAnswers', JSON.stringify(answers));
    router.push('/result');
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
          {/* 左侧文章 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">{articleData.title}</h2>
            {Object.entries(articleData.paragraphs).map(([para, content]) => (
              <div key={para} className="mb-4">
                <h3 className="font-bold text-blue-600 mb-1">段落 {para}</h3>
                <p className="text-gray-700 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>

          {/* 右侧题目 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">题目</h2>
            {questionIds.map((qId, idx) => {
              const q = articleData.questions[Number(qId)];
              if (!q) return null;
              
              const isYesNo = q.options && q.options.A && ['YES', 'NO', 'NOT GIVEN'].includes(q.options.A);
              
              return (
                <div key={qId} className="mb-6 pb-4 border-b last:border-0">
                  <div className="font-medium mb-2">
                    {idx + 1}. {q.text}
                  </div>
                  <div className="space-y-2 pl-4">
                    {Object.entries(q.options).map(([optKey, optValue]) => (
                      <label key={optKey} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`q${qId}`}
                          value={optKey}
                          onChange={() => handleAnswer(qId, optKey)}
                          checked={answers[qId] === optKey}
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">
                          {isYesNo ? optValue : `${optKey}. ${optValue}`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}

            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== totalQuestions}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                Object.keys(answers).length === totalQuestions
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              提交答案 ({Object.keys(answers).length}/{totalQuestions})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}