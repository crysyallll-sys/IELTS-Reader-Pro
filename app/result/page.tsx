// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { articleData } from '@/data/questions';

// 错因类型映射表
const errorTypeMap: Record<string, string> = {
  'LOC-01': '找不到正确答案段落',
  'LOC-02': '找错段落',
  'SYN-01': '不识别同义替换',
  'SYN-02': '答案词形式错误',
  'LOG-01': 'NG与FALSE混淆',
  'LOG-02': '过度联想/主观判断',
  'LOG-03': '受干扰项误导',
  'LOG-04': '找不准考点词',
  'LON-01': '长难句结构复杂看不懂',
  'LON-02': '定位句理解偏差',
  'STR-01': '时间不够/做不完',
  'STR-02': '被难题卡住影响后续',
  'STR-03': '做题顺序/策略差',
};

export default function ResultPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('practiceAnswers');
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  const calculateScore = () => {
    let correct = 0;
    for (const [qId, userRawAnswer] of Object.entries(answers)) {
      const q = articleData.questions[Number(qId)];
      if (!q) continue;
      
      const isYesNoQuestion = q.options && 
        Object.values(q.options).some(v => ['YES', 'NO', 'NOT GIVEN'].includes(v as string));
      
      let isCorrect = false;
      
      if (isYesNoQuestion) {
        const optionMap: Record<string, string> = {
          'A': 'YES',
          'B': 'NO',
          'C': 'NOT GIVEN'
        };
        const mappedAnswer = optionMap[userRawAnswer];
        isCorrect = mappedAnswer === q.answer;
      } else {
        isCorrect = userRawAnswer === q.answer;
      }
      
      if (isCorrect) correct++;
    }
    return { correct, total: Object.keys(articleData.questions).length };
  };

  const { correct, total } = calculateScore();
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  const getQuestionData = (qId: string) => {
    const q = articleData.questions[Number(qId)];
    let userAnswer = answers[qId];
    let isCorrect = false;
    
    const isYesNoQuestion = q?.options && 
      Object.values(q.options).some(v => ['YES', 'NO', 'NOT GIVEN'].includes(v as string));
    
    if (isYesNoQuestion && q) {
      const optionMap: Record<string, string> = {
        'A': 'YES',
        'B': 'NO',
        'C': 'NOT GIVEN'
      };
      const mappedAnswer = optionMap[userAnswer];
      isCorrect = mappedAnswer === q.answer;
      userAnswer = mappedAnswer;
    } else {
      isCorrect = userAnswer === q?.answer;
    }
    
    const isUnanswered = !userAnswer;
    
    return { q, userAnswer, isCorrect, isUnanswered };
  };

  const questionIds = Object.keys(articleData.questions).sort((a, b) => Number(a) - Number(b));

  // 渲染解题思路
  const renderSolution = (solution: string) => {
    if (!solution) return null;
    return solution.split('\n').map((line, idx) => (
      <div key={idx} className="text-sm text-gray-700 mb-1">
        {line}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部栏 */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">IELTS-Reader-Pro</h1>
          <button
            onClick={() => router.push('/')}
            className="text-blue-600 hover:underline text-sm"
          >
            再做一次
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* 成绩卡片 */}
        <div className="bg-white rounded-lg shadow p-4 mb-6 text-center">
          <div className="text-3xl font-bold text-blue-600">{percentage}%</div>
          <div className="text-gray-600">正确 {correct} / 总题数 {total}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{ height: 'calc(100vh - 140px)' }}>
          {/* 左侧：文章 */}
          <div className="bg-white rounded-lg shadow flex flex-col overflow-hidden">
            <div className="sticky top-0 bg-white border-b px-6 py-3 z-10">
              <h2 className="text-xl font-bold text-blue-600">📖 原文</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {Object.entries(articleData.paragraphs).map(([para, content]) => (
                <div key={para} className="mb-4">
                  <h3 className="font-bold text-blue-600 mb-1">段落 {para}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：题目与解析 */}
          <div className="bg-white rounded-lg shadow flex flex-col overflow-hidden">
            <div className="sticky top-0 bg-white border-b px-6 py-3 z-10">
              <h2 className="text-xl font-bold text-blue-600">📝 题目与解析</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {questionIds.map((qId, idx) => {
                  const { q, userAnswer, isCorrect, isUnanswered } = getQuestionData(qId);
                  if (!q) return null;
                  const isExpanded = expandedId === Number(qId);

                  return (
                    <div key={qId} className="border rounded-lg overflow-hidden">
                      <div
                        className={`p-3 cursor-pointer ${
                          isUnanswered ? 'bg-gray-100' : isCorrect ? 'bg-green-50' : 'bg-red-50'
                        }`}
                        onClick={() => setExpandedId(isExpanded ? null : Number(qId))}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="font-medium text-sm">
                              {idx + 1}. {q.text}
                            </div>
                            <div className="text-xs mt-1">
                              你的答案: <strong>{isUnanswered ? '未作答' : userAnswer}</strong>
                              {!isUnanswered && (
                                <span className="ml-2">
                                  正确答案: <strong className="text-green-600">{q.answer}</strong>
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="ml-2">
                            {isUnanswered ? (
                              <span className="text-gray-500 text-xs">⚠️ 未答</span>
                            ) : isCorrect ? (
                              <span className="text-green-600">✓</span>
                            ) : (
                              <span className="text-red-600">✗</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {isExpanded && !isUnanswered && !isCorrect && (
                        <div className="p-4 bg-gray-50 border-t space-y-3">
                          {/* 定位证据 */}
                          <div>
                            <div className="font-semibold text-gray-700 text-sm mb-2">📍 定位证据</div>
                            <div className="space-y-1 text-sm pl-2">
                              <div>├── 段落: {q.locationParagraph}</div>
                              <div>├── 定位句: "{q.locationSentence}"</div>
                              {q.translation && <div>└── 翻译: {q.translation}</div>}
                            </div>
                          </div>

                          {/* 知识拓展 */}
                          {q.synonymPairs && q.synonymPairs.length > 0 && (
                            <div>
                              <div className="font-semibold text-gray-700 text-sm mb-2">📚 知识拓展</div>
                              <div className="space-y-1 text-sm pl-2">
                                <div>└── 同义替换:</div>
                                <div className="pl-4 space-y-0.5">
                                  {q.synonymPairs.map((pair: any, idx2: number) => (
                                    <div key={idx2} className="text-gray-600">
                                      {pair.from} → {pair.to}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 错因分析 */}
                          <div>
                            <div className="font-semibold text-gray-700 text-sm mb-2">💡 错因分析</div>
                            <div className="space-y-1 text-sm pl-2">
                              <div>├── 类型: {errorTypeMap[q.errorType] || '未分类'} ({q.errorType})</div>
                              <div>└── 原因: {q.errorAnalysis}</div>
                            </div>
                          </div>

                          {/* 解题思路 */}
                          {q.solution && (
                            <div>
                              <div className="font-semibold text-gray-700 text-sm mb-2">🎯 解题思路</div>
                              <div className="pl-2">
                                {renderSolution(q.solution)}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {isExpanded && isUnanswered && (
                        <div className="p-3 bg-gray-50 border-t">
                          <div className="text-gray-500 text-sm p-2 bg-gray-100 rounded">
                            本题未作答。正确答案是 <strong>{q.answer}</strong>
                            {q.solution && (
                              <div className="mt-2 pt-2 border-t border-gray-200">
                                <div className="font-semibold text-gray-700 mb-1">🎯 解题思路</div>
                                {renderSolution(q.solution)}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {isExpanded && !isUnanswered && isCorrect && (
                        <div className="p-3 bg-gray-50 border-t">
                          <div className="text-green-600 text-sm p-2 bg-green-50 rounded">
                            ✓ 回答正确
                            {q.solution && (
                              <div className="mt-2 pt-2 border-t border-green-200">
                                <div className="font-semibold text-gray-700 mb-1">🎯 参考解析</div>
                                {renderSolution(q.solution)}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 继续按钮 */}
        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            继续练习
          </button>
        </div>
      </div>
    </div>
  );
}
