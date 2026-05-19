# IELTS-Reader-Pro

> 一款「诊断优先」的雅思阅读技能训练工具。  
> 不刷题，只训练你真正缺失的能力。

[![Website](https://img.shields.io/badge/在线演示-vercel-blue)](https://ielts-readeravenger-pro.vercel.app/practice/1)
[![GitHub](https://img.shields.io/badge/项目地址-github-lightgrey)](https://github.com/crysyallll-sys/ielts-readeravenger-pro)

---

## 📌 产品简介

很多雅思考生做了大量真题，分数却不见涨。  
原因很简单：**只知道错了，不知道「为什么错」**。

IELTS-Reader-Pro 通过**错因诊断 + 技能树 + 微技能训练**，让用户精准定位自己的薄弱环节，并通过轻量化的训练游戏逐步提升。

---

## 🎯 核心功能

### 1. 技能树

将雅思阅读能力拆解为 7 个核心技能：

| 技能 | 说明 |
|------|------|
| 关键词定位 | 快速找到题干关键词在原文的位置 |
| 段落扫读 | 快速抓取段落主旨 |
| 同义替换识别 | 识别题干与原文的替换关系 |
| 长难句解析 | 拆解复杂句子结构 |
| 逻辑陷阱判断 | 识别 NG / 过度联想等逻辑错误 |
| NOT GIVEN 判断 | 准确区分 NG 与 FALSE |
| 时间管理 | 合理分配答题时间 |

每个技能有 5 个等级，完成训练或正确答题可获得经验，等级自动提升。

### 2. 错因诊断

做完题目后，系统会告诉你：

- ✅ 哪道题错了
- 📍 正确答案在哪句话
- 🔍 这句话是什么意思（翻译 + 句子结构）
- 💡 你为什么会错（错因分析）

目前已有 14 道剑桥真题 + 完整证据链。

### 3. 微技能训练

针对每个技能设计了轻量化的训练游戏：

- **同义替换消消乐**：配对原文词与同义替换词
- 更多训练（关键词定位、长难句切分、NG判断）即将上线

每次训练完成可增加对应技能经验。

---

## 🧩 技术栈

| 领域 | 技术 |
|------|------|
| 前端框架 | Next.js 16 + React 19 |
| 语言 | TypeScript |
| 样式 | Tailwind CSS |
| 数据存储 | LocalStorage |
| 部署 | Vercel |

---

## 🚀 在线体验

[https://ielts-readeravenger-pro.vercel.app/practice/1](https://ielts-readeravenger-pro.vercel.app/practice/1)

> 建议先做题（随便选），提交后查看「能力地图」和「错因分析」。

---

## 📁 项目结构

```
ielts-readeravenger-pro/
├── app/
│   ├── practice/          # 做题页面
│   ├── result/            # 结果页（错因+证据链）
│   ├── skill-tree/        # 技能树页面
│   └── micro-training/    # 微训练（同义替换消消乐）
├── data/
│   └── questions.ts       # 文章+题目数据
├── public/                # 静态资源
└── ...
```

---

## 📄 使用说明

### 本地运行

```bash
# 1. 克隆项目
git clone https://github.com/crysyallll-sys/ielts-readeravenger-pro.git

# 2. 进入目录
cd ielts-readeravenger-pro

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run dev

# 5. 浏览器访问
http://localhost:3000/practice/1
```

---

## 🗺️ 路线图

- [x] 做题 + 结果页 + 证据链
- [x] 技能树 + 等级系统
- [x] 技能与做题结果关联
- [x] 同义替换消消乐（微训练）
- [ ] 更多微训练（关键词定位、长难句切分、NG判断）
- [ ] 用户登录 + 数据云端同步
- [ ] 错题本导出 PDF

---

## 📬 联系与反馈

- 项目作者：crysyallll-sys
- 项目地址：[GitHub](https://github.com/crysyallll-sys/ielts-readeravenger-pro)

---

## 📃 License

MIT

---

