"use client";

import { useState, useEffect } from "react";

interface Skill {
  id: string;
  name: string;
  description: string;
  level: number;
  exp: number;
  expToNext: number;
  unlocked: boolean;
}

const EXP_PER_LEVEL = 100;
const QUESTION_TYPE_MAP: Record<string, string[]> = {
  keyword: ["keyword_match"],
  scan: ["fill_blank", "heading_match"],
  paraphrase: ["paraphrase_match"],
  sentence: ["sentence_parse"],
  logic: ["logic_infer"],
  notgiven: ["not_given"],
  time: ["time_alloc"],
};

function getExpGain(questionType: string): string {
  const mapping: Record<string, string> = {
    keyword_match: "keyword",
    fill_blank: "scan",
    heading_match: "scan",
    paraphrase_match: "paraphrase",
    sentence_parse: "sentence",
    logic_infer: "logic",
    not_given: "notgiven",
    time_alloc: "time",
  };
  return mapping[questionType] ?? "keyword";
}

function levelToLV(level: number) {
  return `LV.${level}`;
}

function buildInitialSkills(): Skill[] {
  return [
    { id: "keyword", name: "关键词定位", description: "快速定位题目关键词在原文中的位置", level: 1, exp: 0, expToNext: EXP_PER_LEVEL, unlocked: true },
    { id: "scan", name: "段落扫读", description: "快速扫读段落获取核心信息", level: 1, exp: 0, expToNext: EXP_PER_LEVEL, unlocked: true },
    { id: "paraphrase", name: "同义替换识别", description: "识别题目与原文的同义改写", level: 1, exp: 0, expToNext: EXP_PER_LEVEL, unlocked: true },
    { id: "sentence", name: "长难句解析", description: "分析复杂句子结构", level: 1, exp: 0, expToNext: EXP_PER_LEVEL, unlocked: false },
    { id: "logic", name: "逻辑陷阱判断", description: "识别论证中的逻辑漏洞", level: 1, exp: 0, expToNext: EXP_PER_LEVEL, unlocked: false },
    { id: "notgiven", name: "NOT GIVEN判断", description: "判断信息是否原文未提及", level: 1, exp: 0, expToNext: EXP_PER_LEVEL, unlocked: false },
    { id: "time", name: "时间管理", description: "合理分配答题时间", level: 1, exp: 0, expToNext: EXP_PER_LEVEL, unlocked: true },
  ];
}

function updateUnlocks(skills: Skill[]): Skill[] {
  const paraphraseLV2 = (skills.find(s => s.id === "paraphrase")?.level ?? 0) >= 2;
  const logicLV2 = (skills.find(s => s.id === "logic")?.level ?? 0) >= 2;

  return skills.map(s => {
    if (s.id === "sentence") return { ...s, unlocked: paraphraseLV2 };
    if (s.id === "logic") return { ...s, unlocked: paraphraseLV2 };
    if (s.id === "notgiven") return { ...s, unlocked: logicLV2 };
    return s;
  });
}

function addExp(skills: Skill[], skillId: string, amount: number): Skill[] {
  const updated = skills.map(s => {
    if (s.id !== skillId) return s;
    const newExp = s.exp + amount;
    const totalForLevel = s.level * EXP_PER_LEVEL;
    if (newExp >= totalForLevel && s.level < 5) {
      const remainder = newExp - totalForLevel;
      return { ...s, level: s.level + 1, exp: remainder, expToNext: EXP_PER_LEVEL };
    }
    return { ...s, exp: Math.min(newExp, totalForLevel - 1) };
  });
  return updateUnlocks(updated);
}

function SkillCard({ skill }: { skill: Skill }) {
  const progress = (skill.exp / skill.expToNext) * 100;

  return (
    <div className={`rounded-xl p-4 border ${skill.unlocked ? "bg-white border-gray-200" : "bg-gray-100 border-gray-300 opacity-60"}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">{skill.name}</h3>
        <span className={`text-sm font-medium ${skill.unlocked ? "text-blue-600" : "text-gray-400"}`}>
          {levelToLV(skill.level)}
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-3">{skill.description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-1 text-right">{skill.exp}/{skill.expToNext} EXP</p>
      {!skill.unlocked && (
        <p className="text-xs text-orange-500 mt-2">🔒 需先解锁前置技能</p>
      )}
    </div>
  );
}

export default function SkillTreePage() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("skillTreeData");
    if (stored) {
      const parsed = JSON.parse(stored) as Skill[];
      setSkills(updateUnlocks(parsed));
    } else {
      setSkills(buildInitialSkills());
    }
  }, []);

  useEffect(() => {
    if (skills.length > 0) {
      localStorage.setItem("skillTreeData", JSON.stringify(skills));
    }
  }, [skills]);

  const handleDemo = () => {
    setSkills(prev => addExp(prev, "paraphrase", 50));
  };

  const handleAnswer = (questionType: string) => {
    const skillId = getExpGain(questionType);
    setSkills(prev => addExp(prev, skillId, 3));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">能力地图</h1>

        <div className="grid grid-cols-1 gap-4">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        <div className="mt-8 space-y-3">
          <button
            onClick={handleDemo}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors"
          >
            演示：同义替换 +50 经验
          </button>

          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <h4 className="font-medium text-gray-700 mb-2">模拟答题（测试经验规则）</h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(QUESTION_TYPE_MAP).map(skillId => {
                const skill = skills.find(s => s.id === skillId);
                return (
                  <button
                    key={skillId}
                    onClick={() => handleAnswer(QUESTION_TYPE_MAP[skillId][0])}
                    disabled={!skill?.unlocked}
                    className="text-sm bg-blue-50 hover:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 text-blue-700 py-2 px-3 rounded-lg transition-colors"
                  >
                    +3 {skill?.name ?? skillId}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}