// @ts-nocheck
// data/questions.ts

export const articleData = {
  id: "cambridge_stress",
  title: "How stress affects our judgement",
  paragraphs: {
    A: "Some of the most important decisions of our lives occur while we're feeling stressed and anxious. From medical decisions to financial and professional ones, we are all sometimes required to weigh up information under stressful conditions. But do we become better or worse at processing and using information under such circumstances?",
    B: "My colleague and I, both neuroscientists, wanted to investigate how the mind operates under stress, so we visited some local fire stations. Firefighters' workdays vary quite a bit. Some are pretty relaxed; they'll spend their time washing the truck, cleaning equipment, cooking meals and reading. Other days can be hectic, with numerous life-threatening incidents to attend to; they'll enter burning homes to rescue trapped residents, and assist with medical emergencies. These ups and downs presented the perfect setting for an experiment on how people's ability to use information changes when they feel under pressure.",
    C: "We found that perceived threat acted as a trigger for a stress reaction that made the task of processing information easier for the firefighters --- but only as long as it conveyed bad news.",
    D: "This is how we arrived at these results. We asked the firefighters to estimate their likelihood of experiencing 40 different adverse events in their life, such as being involved in an accident or becoming a victim of card fraud. We then gave them either good news (that their likelihood of experiencing these events was lower than they'd thought) or bad news (that it was higher) and asked them to provide new estimates.",
    E: "People are normally quite optimistic --- they will ignore bad news and embrace the good. This is what happened when the firefighters were relaxed; but when they were under stress, a different pattern emerged. Under these conditions, they became hyper-vigilant to bad news, even when it had nothing to do with their job (such as learning that the likelihood of card fraud was higher than they'd thought), and altered their beliefs in response. In contrast, stress didn't change how they responded to good news (such as learning that the likelihood of card fraud was lower than they'd thought).",
    F: "Back in our lab, we observed the same pattern in students who were told they had to give a surprise public speech, which would be judged by a panel, recorded and posted online. Sure enough, their cortisol levels spiked, their heart rates went up and they suddenly became better at processing unrelated, yet alarming, information about rates of disease and violence.",
    G: "When we experience stressful events, a physiological change is triggered that causes us to take in warnings and focus on what might go wrong. Brain imaging reveals that this 'switch' is related to a sudden boost in a neural signal important for learning, specifically in response to unexpected warning signs, such as faces expressing fear.",
    H: "Such neural engineering could have helped prehistoric humans to survive. When our ancestors found themselves surrounded by hungry animals, they would have benefited from an increased ability to learn about hazards. In a safe environment, however, it would have been wasteful to be on high alert constantly. So, a neural switch that automatically increases or decreases our ability to process warnings in response to changes in our environment could have been useful. In fact, people with clinical depression and anxiety seem unable to switch away from a state in which they absorb all the negative messages around them.",
    I: "It is also important to realise that stress travels rapidly from one person to the next. If a co-worker is stressed, we are more likely to tense up and feel stressed ourselves. We don't even need to be in the same room with someone for their emotions to influence our behaviour. Studies show that if we observe positive feeds on social media, such as images of a pink sunset, we are more likely to post uplifting messages ourselves. If we observe negative posts, such as complaints about a long queue at the coffee shop, we will in turn create more negative posts.",
    J: "In some ways, many of us now live as if we are in danger, constantly ready to tackle demanding emails and text messages, and respond to news alerts and comments on social media. Repeatedly checking your phone, according to a survey conducted by the American Psychological Association, is related to stress. In other words, a pre-programmed physiological reaction, which evolution has equipped us with to help us avoid famished predators, is now being triggered by an online post. Social media posting, according to one study, raises your pulse, makes you sweat, and enlarges your pupils more than most daily activities.",
    K: "The fact that stress increases the likelihood that we will focus more on alarming messages, together with the fact that it spreads extremely rapidly, can create collective fear that is not always justified. After a stressful public event, such as a natural disaster or major financial crash, there is often a wave of alarming information in traditional and social media, which individuals become very aware of. But that has the effect of exaggerating existing danger. And so, a reliable pattern emerges --- stress is triggered, spreading from one person to the next, which temporarily enhances the likelihood that people will take in negative reports, which increases stress further. As a result, trips are cancelled, even if the disaster took place across the globe; stocks are sold, even when holding on is the best thing to do.",
    L: "The good news, however, is that positive emotions, such as hope, are contagious too, and are powerful in inducing people to act to find solutions. Being aware of the close relationship between people's emotional state and how they process information can help us frame our messages more effectively and become conscientious agents of change."
  },

  questions: {
    27: {
      text: "In the first paragraph, the writer introduces the topic of the text by",
      answer: "C",
      options: { A: "defining some commonly used terms.", B: "questioning a widely held assumption.", C: "mentioning a challenge faced by everyone.", D: "specifying a situation which makes us most anxious." },
      locationParagraph: "A",
      locationSentence: "Some of the most important decisions of our lives occur while we're feeling stressed and anxious. From medical decisions to financial and professional ones, we are all sometimes required to weigh up information under stressful conditions. But do we become better or worse at processing and using information under such circumstances?",
      translation: "我们生活中一些最重要的决定往往是在感到压力和焦虑时做出的。无论是医疗决策，还是财务和职业决策，我们有时都需要在压力条件下权衡信息。但压力下我们处理信息的能力是变好还是变差？",
      synonymPairs: [{ from: "the most important decisions of our lives... we are all sometimes required", to: "a challenge faced by everyone" }],
      errorType: "LOG-03",
      errorAnalysis: "你选的选项可能是 B（质疑普遍假设）或 D（指定让我们最焦虑的情况）。文章第一段并没有质疑任何假设，也没有特指某种焦虑情况。",
      solution: "1️⃣ 第一段第一句：重要决定常在压力下做出 → 背景陈述。\n2️⃣ 第二句：从医疗到职业，都需要在压力下权衡信息 → 举例说明这是普遍现象。\n3️⃣ 第三句：抛出核心问题：压力下我们处理信息的能力是变好还是变差？→ 引出全文话题。\n4️⃣ 综合这三句，作者是在「提及每个人都面临的挑战」。"
    },
    28: {
      text: "What point does the writer make about firefighters in the second paragraph?",
      answer: "A",
      options: { A: "The regular changes of stress levels in their working lives make them ideal study subjects.", B: "The strategies they use to handle stress are of particular interest to researchers.", C: "The stressful nature of their job is typical of many public service professions.", D: "Their personalities make them especially well-suited to working under stress." },
      locationParagraph: "B",
      locationSentence: "Firefighters' workdays vary quite a bit. Some are pretty relaxed... Other days can be hectic... These ups and downs presented the perfect setting for an experiment on how people's ability to use information changes when they feel under pressure.",
      translation: "消防员的工作日程差异很大。有些日子相当轻松...其他日子则可能十分忙碌...这些起伏为研究人们在压力下使用信息的能力如何变化提供了完美的实验环境。",
      synonymPairs: [{ from: "ups and downs", to: "regular changes" }, { from: "perfect setting", to: "ideal study subjects" }],
      errorType: "LOC-02",
      errorAnalysis: "你找错了关键信息。正确答案强调消防员工作压力的「起伏变化」（ups and downs），而不是「策略」或「性格」。",
      solution: "1️⃣ 题干关键词 `firefighters` 定位到第二段。\n2️⃣ 第一、二句描述消防员工作的反差：有时轻松，有时忙碌。\n3️⃣ 第三句明确说：These ups and downs presented the perfect setting for an experiment。\n4️⃣ ups and downs = regular changes，perfect setting = ideal study subjects。\n5️⃣ 所以答案是 A。"
    },
    29: {
      text: "What is the writer doing in the fourth paragraph?",
      answer: "D",
      options: { A: "explaining their findings", B: "justifying their approach", C: "setting out their objectives", D: "describing their methodology" },
      locationParagraph: "D",
      locationSentence: "This is how we arrived at these results. We asked the firefighters to estimate their likelihood of experiencing 40 different adverse events in their life, such as being involved in an accident or becoming a victim of card fraud. We then gave them either good news... or bad news... and asked them to provide new estimates.",
      translation: "我们就是这样得出这些结果的。我们要求消防员们估计他们在生活中遭遇40种不同不良事件的可能性，例如遭遇事故或成为信用卡诈骗的受害者。然后，我们告诉他们好消息或坏消息，并要求他们提供新的估计。",
      synonymPairs: [{ from: "This is how we arrived at these results", to: "describing their methodology" }],
      errorType: "LOG-03",
      errorAnalysis: "你选的可能是 A（解释发现）或 C（陈述目标）。但第四段描述的是实验的具体步骤，这是「方法论」（methodology），而非发现或目标。",
      solution: "1️⃣ 第四段第一句：This is how we arrived at these results → 明确告知下文是研究方法。\n2️⃣ 第二、三句详细描述实验过程：让消防员预估概率 → 告知好坏消息 → 让他们重新预估。\n3️⃣ 这属于「描述方法论」。"
    },
    30: {
      text: "In the seventh paragraph, the writer describes a mechanism in the brain which",
      answer: "C",
      options: { A: "enables people to respond more quickly to stressful situations.", B: "results in increased ability to control our levels of anxiety", C: "produces heightened sensitivity to indications of external threats.", D: "is activated when there is a need to communicate a sense of danger." },
      locationParagraph: "G",
      locationSentence: "Brain imaging reveals that this 'switch' is related to a sudden boost in a neural signal important for learning, specifically in response to unexpected warning signs, such as faces expressing fear.",
      translation: "脑成像显示，这种'切换'与一种对学习至关重要的神经信号的突然增强有关，特别是对意外警告信号（如表达恐惧的面孔）的反应。",
      synonymPairs: [{ from: "unexpected warning signs, such as faces expressing fear", to: "indications of external threats" }],
      errorType: "SYN-01",
      errorAnalysis: "你选的可能是 A（快速反应）或 B（控制焦虑）。文章强调的是对「威胁信号」的敏感度增强，而不是反应速度或控制能力。",
      solution: "1️⃣ 第七段第二句：this 'switch' is related to a sudden boost... specifically in response to unexpected warning signs, such as faces expressing fear。\n2️⃣ unexpected warning signs = indications of external threats。\n3️⃣ 所以答案 C「产生对外部威胁信号的更高敏感度」正确。"
    },
    31: {
      text: "At times when they were relaxed, the firefighters usually",
      answer: "B",
      options: { A: "made them feel optimistic.", B: "took relatively little notice of bad news.", C: "responded to negative and positive information in the same way.", D: "were feeling under stress.", E: "put them in a stressful situation.", F: "behaved in a similar manner, regardless of the circumstances.", G: "thought it more likely that they would experience something bad" },
      locationParagraph: "E",
      locationSentence: "People are normally quite optimistic --- they will ignore bad news and embrace the good. This is what happened when the firefighters were relaxed",
      translation: "人们通常都相当乐观——他们会忽略坏消息，而欣然接受好消息。当消防员们处于放松状态时，呈现的就是这个状态。",
      synonymPairs: [{ from: "ignore bad news", to: "took relatively little notice of bad news" }],
      errorType: "SYN-01",
      errorAnalysis: "你选的可能是 A（让他们感到乐观）或 G（认为更可能遇到坏事）。原文明确说放松时「忽略坏消息」。",
      solution: "1️⃣ 题干关键词 `relaxed` 定位到第五段。\n2️⃣ 第一句：People are normally quite optimistic — they will ignore bad news and embrace the good。\n3️⃣ 第二句：This is what happened when the firefighters were relaxed。\n4️⃣ ignore bad news = took relatively little notice of bad news。"
    },
    32: {
      text: "The researchers noted that when the firefighters were stressed, they",
      answer: "G",
      options: { A: "made them feel optimistic.", B: "took relatively little notice of bad news.", C: "responded to negative and positive information in the same way.", D: "were feeling under stress.", E: "put them in a stressful situation.", F: "behaved in a similar manner, regardless of the circumstances.", G: "thought it more likely that they would experience something bad" },
      locationParagraph: "E",
      locationSentence: "Under these conditions, they became hyper-vigilant to bad news, even when it had nothing to do with their job (such as learning that the likelihood of card fraud was higher than they'd thought), and altered their beliefs in response.",
      translation: "在这种情况下，他们对坏消息变得高度警惕，即使这些消息与他们的工作毫无关系（比如得知信用卡诈骗的可能性比他们想象的要高），并据此调整判断。",
      synonymPairs: [{ from: "hyper-vigilant to bad news, altered their beliefs", to: "thought it more likely that they would experience something bad" }],
      errorType: "SYN-01",
      errorAnalysis: "你选了 F（无论环境如何行为一致）。原文第五段明确区分了放松和压力状态：压力下变得「高度警惕」并改变信念。",
      solution: "1️⃣ 题干关键词 `stressed` 定位到第五段第二句：but when they were under stress, a different pattern emerged。\n2️⃣ 第三句具体描述：they became hyper-vigilant to bad news... and altered their beliefs。\n3️⃣ hyper-vigilant = 高度警惕，意味着他们认为坏事更可能发生。"
    },
    33: {
      text: "When the firefighters were told good news, they always",
      answer: "F",
      options: { A: "made them feel optimistic.", B: "took relatively little notice of bad news.", C: "responded to negative and positive information in the same way.", D: "were feeling under stress.", E: "put them in a stressful situation.", F: "behaved in a similar manner, regardless of the circumstances.", G: "thought it more likely that they would experience something bad" },
      locationParagraph: "E",
      locationSentence: "In contrast, stress didn't change how they responded to good news",
      translation: "相比之下，压力并没有改变他们对好消息的反应。",
      synonymPairs: [{ from: "didn't change how they responded", to: "behaved in a similar manner, regardless of the circumstances" }],
      errorType: "SYN-01",
      errorAnalysis: "你选的可能是 C（对好坏消息反应相同）。原文只说了压力下对好消息的反应没变。",
      solution: "1️⃣ 题干关键词 `good news` 定位到第五段最后一句。\n2️⃣ stress didn't change how they responded to good news。\n3️⃣ 意思是无论是否有压力，他们对好消息的反应都一样 → 答案 F。"
    },
    34: {
      text: "The students' cortisol levels and heart rates were affected when the researchers",
      answer: "E",
      options: { A: "made them feel optimistic.", B: "took relatively little notice of bad news.", C: "responded to negative and positive information in the same way.", D: "were feeling under stress.", E: "put them in a stressful situation.", F: "behaved in a similar manner, regardless of the circumstances.", G: "thought it more likely that they would experience something bad" },
      locationParagraph: "F",
      locationSentence: "Back in our lab, we observed the same pattern in students who were told they had to give a surprise public speech, which would be judged by a panel, recorded and posted online. Sure enough, their cortisol levels spiked, their heart rates went up",
      translation: "回到实验室，我们观察到，在那些被告知必须进行一场出人意料的公开演讲的学生身上...他们的皮质醇水平飙升，心率加快。",
      synonymPairs: [{ from: "told they had to give a surprise public speech", to: "put them in a stressful situation" }],
      errorType: "SYN-01",
      errorAnalysis: "你选的可能是 D（感到压力）。但题干问的是「研究者的行为」导致了生理变化。",
      solution: "1️⃣ 题干关键词 `cortisol levels and heart rates` 定位到第六段。\n2️⃣ 第一句：students who were told they had to give a surprise public speech。\n3️⃣ 第二句：their cortisol levels spiked, their heart rates went up。\n4️⃣ 所以是研究者「将他们置于压力环境」导致了生理变化。"
    },
    35: {
      text: "In both experiments, negative information was processed better when the subjects",
      answer: "D",
      options: { A: "made them feel optimistic.", B: "took relatively little notice of bad news.", C: "responded to negative and positive information in the same way.", D: "were feeling under stress.", E: "put them in a stressful situation.", F: "behaved in a similar manner, regardless of the circumstances.", G: "thought it more likely that they would experience something bad" },
      locationParagraph: "E+F",
      locationSentence: "Under these conditions, they became hyper-vigilant to bad news / they suddenly became better at processing unrelated, yet alarming, information",
      translation: "在这种情况下，他们对坏消息变得高度警惕 / 他们突然变得更善于处理令人警觉的信息。",
      synonymPairs: [{ from: "hyper-vigilant to bad news / better at processing alarming information", to: "negative information was processed better" }],
      errorType: "SYN-01",
      errorAnalysis: "你选的可能是 E（被置于压力下）。题干问的是「受试者的状态」，不是研究者的行为。",
      solution: "1️⃣ 题干关键词 `both experiments` 指向消防员和学生两个实验。\n2️⃣ 消防员实验：Under these conditions（压力下），对坏消息高度警惕。\n3️⃣ 学生实验：同样模式下，更好处理令人警觉的信息。\n4️⃣ 共同点是「受试者感到压力时」，负面信息处理更好。"
    },
    36: {
      text: "The tone of the content we post on social media tends to reflect the nature of the posts in our feeds",
      answer: "YES",
      options: { A: "YES", B: "NO", C: "NOT GIVEN" },
      locationParagraph: "I",
      locationSentence: "Studies show that if we observe positive feeds on social media... we are more likely to post uplifting messages ourselves. If we observe negative posts... we will in turn create more negative posts.",
      translation: "研究表明，如果我们在社交媒体上看到积极的反馈...我们自己也会更有可能发布令人振奋的信息。如果我们看到负面的帖子...我们反过来也会发布更多负面的帖子。",
      synonymPairs: [{ from: "post uplifting messages / create more negative posts", to: "reflect the nature of the posts in our feeds" }],
      errorType: "SYN-01",
      errorAnalysis: "原文直接给出了正反两种情况的证据，说明我们的帖子反映接收到的内容性质。",
      solution: "1️⃣ 题干关键词 `social media` 定位到第九段最后两句。\n2️⃣ 看到积极信息 → 发布积极信息；看到消极信息 → 发布消极信息。\n3️⃣ 这正是「帖子的语气反映了信息流中的内容性质」。"
    },
    37: {
      text: "Phones have a greater impact on our stress levels than other electronic media devices",
      answer: "NOT GIVEN",
      options: { A: "YES", B: "NO", C: "NOT GIVEN" },
      locationParagraph: "J",
      locationSentence: "Repeatedly checking your phone... is related to stress.",
      translation: "频繁查看手机的行为与压力有关。",
      synonymPairs: [],
      errorType: "LOG-01",
      errorAnalysis: "原文只说了手机与压力有关，完全没有与其他电子设备比较。",
      solution: "1️⃣ 题干关键词 `phones` 定位到第十段。\n2️⃣ 原文只说 Repeatedly checking your phone is related to stress。\n3️⃣ 完全没有提到其他电子设备，也没有进行比较 → NOT GIVEN。"
    },
    38: {
      text: "The more we read about a stressful public event on social media, the less able we are to take the information in",
      answer: "NO",
      options: { A: "YES", B: "NO", C: "NOT GIVEN" },
      locationParagraph: "K",
      locationSentence: "After a stressful public event... there is often a wave of alarming information in traditional and social media, which individuals become very aware of.",
      translation: "在令人紧张的公共事件后...传统媒体和社交媒体上往往会涌现大量警示信息，人们对此非常关注。",
      synonymPairs: [{ from: "become very aware of", to: "more able to take the information in" }],
      errorType: "LOG-02",
      errorAnalysis: "原文明确说人们会「非常关注」这些信息，与题干说法相反。",
      solution: "1️⃣ 题干关键词 `stressful public event` 定位到第十一段第二句。\n2️⃣ 原文说 individuals become very aware of。\n3️⃣ 题干说 less able to take the information in → 意思相反 → NO。"
    },
    39: {
      text: "Stress created by social media posts can lead us to take unnecessary precautions",
      answer: "YES",
      options: { A: "YES", B: "NO", C: "NOT GIVEN" },
      locationParagraph: "K",
      locationSentence: "As a result, trips are cancelled, even if the disaster took place across the globe; stocks are sold, even when holding on is the best thing to do.",
      translation: "结果是，即使灾难发生在全球另一端，人们也会取消旅行；即使持有股票是最好的选择，人们也会抛售股票。",
      synonymPairs: [{ from: "trips are cancelled, stocks are sold", to: "unnecessary precautions" }],
      errorType: "SYN-01",
      errorAnalysis: "原文明确举例说明了不必要的预防措施。",
      solution: "1️⃣ 题干关键词 `social media posts` 定位到第十一段。\n2️⃣ 最后一句明确举例：trips are cancelled、stocks are sold。\n3️⃣ 这些都是「不必要的预防措施」→ YES。"
    },
    40: {
      text: "Our tendency to be affected by other people's moods can be used in a positive way",
      answer: "YES",
      options: { A: "YES", B: "NO", C: "NOT GIVEN" },
      locationParagraph: "L",
      locationSentence: "positive emotions, such as hope, are contagious too, and are powerful in inducing people to act to find solutions.",
      translation: "希望等积极情绪同样具有感染力，并且能有力地促使人们采取行动寻找解决方案。",
      synonymPairs: [{ from: "hope are contagious, act to find solutions", to: "affected in a positive way" }],
      errorType: "SYN-01",
      errorAnalysis: "原文明确说积极情绪也会传染，且能促使人们寻找解决方案。",
      solution: "1️⃣ 题干关键词 `affected by other people's moods` 定位到最后一段。\n2️⃣ 第一句：positive emotions, such as hope, are contagious too。\n3️⃣ 第二句：are powerful in inducing people to act to find solutions。\n4️⃣ 这正是「他人的情绪可以被积极利用」→ YES。"
    }
  }
};
