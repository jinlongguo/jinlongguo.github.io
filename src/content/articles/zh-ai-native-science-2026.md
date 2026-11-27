---
title: AI-Native Science：进展与观察
slug: ai-native-science-2026
date: 2026-11-27
summary: "Recent advances in research agents and scientific automation are
  reshaping how science is conducted, how research outputs are designed and
  utilized, and how scientific institutions operate. Taking the diversity of
  scientific knowledge and human intellectual activities as its starting point,
  this essay examines recent developments and emerging practices in AI-native
  science across four dimensions: scientific automation, the rethinking and
  redesign of research outputs, organizational and institutional innovation, and
  the evolution of research mindsets and researchers’ intellectual development.
  It further reflects on the emerging possibilities for scientific research in
  the AI era and the roles human researchers may choose to play in shaping its
  future."
tags:
  - AI for Science
  - Agentic Science
  - AI-Native Science
  - Metascience
  - Research Infrastructure
  - Scholarly Communication
lang: zh
draft: false
translationKey: ai-native-science-2026
---
## 1 研究与写作动机

AI正在实质性地介入原先主要由人类主导的科学研究体系。这种变化不仅涉及科研能力的提升，也涉及科研方式、成果形态、组织制度以及科学共同体既有观念的变化。早在2024年，围绕AI for Science（AI4S）的讨论就已经涉及知识生产方式的变革、人机协作以及面向AI的科研基础设施建设等问题。进入2026年，随着AI Agent技术的发展，尤其是长程任务执行能力的不断增强，以科研智能体（Research Agent）和智能体驱动的科学研究（Agentic Science）为代表的研究与实践，进一步拓展了AI介入科学研究的深度和广度。

在这一背景下，一些研究领域已经开始面对如何消化、理解与验证AI产生的科研成果等问题。由此也产生了一种关于未来科研方式的设想，即主要由AI开展科学研究，而人类研究者更多地承担知识理解、验证与吸收等工作。然而，笔者认为，这种设想可能更接近部分科研领域的发展趋势，而未必能够代表科学研究整体的演进方向。

不同学科在研究问题的形成、知识生产、证据获取与验证等方面存在重要差异。例如，通过代码执行开展计算实验、在实验室开展生物医药实验、通过仪器观测获取物理世界的数据，以及通过文献分析、社会调查、经验材料的综合或理论建构生产知识，都是具有不同特点的科研活动。因此，AI介入科研的方式与程度、科研自动化的能力边界，以及人类研究者在知识生产过程中所承担的角色，也需要结合具体的科研实践加以理解。

本文以科学知识与人类智识活动的多样性为基本立场，结合近期AI-native science的若干研究进展与创新实践，从科研自动化技术、科研成果、科研组织与制度以及科研思维方式与研究者成长等方面展开观察与讨论。面对AI所带来的变化，我们既需要理解正在发生什么，也需要主动思考科学研究未来可以采取怎样的形式，以及人类研究者希望在其中扮演怎样的角色。

## 2 科研自动化技术的持续演进

由于科学知识的多样性以及不同学科科研实践之间的差异，科研自动化技术很难遵循某种统一的发展路径。当前许多科研自动化技术仍然是在既有学科的研究方法与知识生产框架下发展起来的，不同领域的研究问题、实验条件与知识验证方式，也对科研自动化技术提出了不同的要求。

例如，Google开发的AI Co-Scientist采用多智能体系统进行科研假设的生成、比较与迭代，并在药物重定位、新靶点发现及抗微生物药物耐药机制研究三个生物医药方向开展了实验验证（Gottweis et al., 2026）。ERA（Empirical Research Assistance）则主要利用AI编写和优化科学计算代码，支持计算实验的反复执行、测试与改进，并在生物信息学、流行病学等多个领域开展了研究（Aygün et al., 2026）。这两项研究也为Google推出的Gemini for Science系列实验性科研工具提供了技术基础。相比之下，Ai2的Asta是一个包含科研智能体、评估基准与开发资源的生态系统，重点关注科学文献检索、证据综合、数据分析及科研智能体评估等活动，其发展也体现了Semantic Scholar等既有科学信息基础设施与新型科研智能体之间的结合（Ai2, 2025）。

尽管不同科研自动化技术具有不同的问题取向，但从近期的相关研究中，仍然可以观察到一些值得关注的共性发展方向。其中两个方向是科研智能体长程科研能力（long-horizon research capabilities）的提升，以及面向Agent的科研基础设施（agent-ready research infrastructure）的建设。

在长程科研能力方面，科研智能体正在尝试从完成一次性的科研任务，走向持续开展包含多个任务与多轮迭代的科研活动。例如，2025年11月发布的Kosmos研究表明，在给定研究目标与数据集的条件下，科研智能体可以持续运行长达12小时，反复开展文献检索、假设生成与数据分析，并利用结构化的世界模型维持不同智能体之间的研究信息共享（Mitchener et al., 2025）。

随着科研智能体能够承担越来越复杂的研究任务，如何维护研究状态、处理研究失败以及验证研究过程中形成的知识主张，也成为重要的技术问题。例如，Ren et al.（2026）提出的EviGraph尝试以证据图的形式表示研究问题、知识缺口、研究假设、实验、研究发现及知识主张之间的关系，并将其作为科研智能体持续维护的研究状态。当系统发现证据链存在缺失或研究结论与实验结果不一致时，可以定位并修正相关研究环节。

这些研究也引出了关于科研自主性的进一步思考：一个Agent能够连续执行大量科研任务，是否就意味着它能够自主开展科学研究？对科研自主性的理解还需要考虑Agent调整研究方向、选择下一步研究行动以及验证知识主张的能力，也需要考虑人类研究者在科研过程中承担的判断与监督工作。因此，对科研智能体自主性能力的理解和评价，需要结合其所处的具体科研实践。

另一方面，科研智能体的发展也对既有科研基础设施提出了新的要求。Zhang et al.（2026）在Bohrium + SciMaster研究中提出了“agent-ready capabilities”的概念，即将科学数据、科研软件、计算资源和实验系统等转化为智能体可以调用、管理和追踪的科研能力。这意味着，AI时代的科研基础设施建设不仅需要考虑人类研究者如何获取和使用科研资源，也需要考虑这些资源如何被Agent发现、调用和组合。

类似的思路也体现在专业领域的知识基础设施建设中。例如，Li et al.（2026）提出的KISS（Knowledge Infrastructure for Scientific Simulation）将地球科学模拟中的领域知识与操作经验组织为Agent可以利用的建模操作、领域工作规范及故障诊断机制，以支持科研智能体开展科学模拟。这类研究表明，科研智能体能力的提升不仅依赖于AI模型自身能力的增强，也依赖于专业知识、科研资源和科研环境的重新组织。

科研自动化技术的发展也开始触及一些以往较少受到此类技术关注的智识活动。例如，Kim et al.（2026）提出的ScholarCatalyst尝试将寻找能够启发新研究的学术文献作为一种检索任务。其作者进一步以“Research Intuition as a Retrieval Task”为题讨论了研究直觉与文献检索之间的关系（Kim & Lee, 2026）。尽管现有AI系统在这一任务上的表现仍然有限，但这类研究提示我们，AI时代科研方式的变化并不局限于实验和计算的自动化，还可能涉及研究者利用文献、形成研究想法以及发挥研究直觉的方式。

**学科多样性既是科研自动化面临的约束，也可能是科研创新的重要来源。** 不同学科的科研实践可以为技术创新提供不同的问题情境，而新技术的发展也可能帮助研究者突破既有学科的研究惯例与方法边界。

## 3 科研成果的重新认识与设计

AI的发展使我们有必要从多个角度重新审视科研成果。随着科研智能体能力的增强，AI参与科研所产生的中间结果、实验记录、研究路径以及阶段性发现等，都可能具有一定的知识价值。其中一些需要进一步转化为人类研究者能够阅读、理解和验证的科研成果，另一些则可能直接供其他Agent利用，以支持后续研究活动。对于后者而言，便于人类阅读未必是其首要设计目标。当然，能够支持后续研究的产出，并不意味着它已经成为经过充分验证的科研成果。

在这一背景下，有必要区分AI-generated research artifacts与AI-native research artifacts。前者主要关注科研成果是如何被生产的，后者则可以从科研成果的设计与利用方式出发加以理解。例如，一项完全由人类研究者设计和生产、但专门面向Agent使用的科研成果，可以是AI-native，却不是AI-generated。

2026年4月，Liu et al.（2026）在《The Last Human-Written Paper: Agent-Native Research Artifacts》中提出了Agent-Native Research Artifact（ARA）的概念，尝试将科研成果设计为包含科学逻辑、可执行代码、研究探索路径和证据记录的知识集合，使Agent能够更好地理解、复现和延续已有研究。相关团队还通过ARA Commons探索面向Agent的研究成果共享。与之有所不同的是，2026年发表于*Nature*的Paper2Agent研究尝试将已有学术论文及其相关代码转化为可交互的AI Agent，使研究者和其他Agent能够更方便地利用论文中的知识、方法与数据开展后续研究（Miao et al., 2026）。

上述研究体现了一种值得关注的科研成果设计思路：**科研成果的形态，不仅取决于知识生产者如何生产知识，也取决于知识使用者如何利用知识。** 当科学知识的使用者从人类扩展到Agent时，科研成果的结构与功能也可能需要被重新设计。

科研成果形态的创新也并非完全由AI的发展所引发。例如，学术期刊*Digital Discovery*于2025年推出了名为Commit的新文章类型，允许研究者针对自己或他人此前在该刊发表的研究成果，提交篇幅较短、可以独立引用的增量改进报告。这些改进可以涉及软件、开放硬件或研究数据等（Whiteside, 2025）。这一实践表明，科研成果不必被视为一次性完成的静态对象，对已有成果的持续改进也可以成为独立发表和获得学术认可的对象。

除了科研成果本身的形态与功能，人类研究者与AI共同创造的科研成果如何认定贡献归属、如何验证其正确性以及如何获得学术认可，也正在成为重要问题。尤其是当重大科研成果依赖于少数AI公司内部尚未向公众开放的前沿模型时，如何区分人类研究者、AI系统及模型开发机构的贡献，如何分配学术荣誉，以及由谁承担科研成果的真实性与正确性责任，都值得进一步讨论。例如，OpenAI于2026年8月公布了利用其内部模型取得的十项数学与理论计算机科学研究进展，并明确区分了AI系统生成数学论证的贡献与人类研究人员整理文稿、协助形式化验证及承担责任的活动（OpenAI, 2026）。

2026年11月20日，Anthropic的数学家Levent Alpöge宣布其与Claude合作获得了黎曼猜想的证明，并公开了包含约1700万行代码的Lean形式化证明。次日，Lean FRO与Mathlib Initiative发布联合声明，确认相关证明通过了多项独立的形式化核验（Golden, 2026; Lean FRO & Mathlib Initiative, 2026）。然而，证明通过形式化验证，与人类数学家充分理解其中的数学思想，并不是同一件事情。这一案例也使我们有必要重新思考科研成果的正确性验证、人类对知识的理解以及科学共同体对科研成果的认可之间的关系。

与上述问题密切相关的是科学交流与发表机制的创新。例如，alphaXiv通过设立Human-written Track和AI Track，探索对不同生产方式的科研成果采用不同的发表通道（alphaXiv, n.d.）。这些实践主要关注科研成果如何被接纳、传播与认证，而不完全是科研成果本身的设计问题。

科研成果形态的创新需要考虑不同科研实践中的知识生产与利用需求，而新型科研成果的出现，也可能对既有的科学交流与学术认可机制提出新的要求。

## 4 科研组织与制度创新

科研机构应该如何组织科研活动？科研资源应该如何分配？研究者应该拥有怎样的自主权？科学共同体应该建立怎样的知识交流与评价机制？AI的发展使这些原本就存在的科学制度问题具有了新的讨论意义。

例如，生成式AI降低了学术文本的生产成本，也可能增加低质量学术作品的供给，给同行评审和科研诚信机制带来新的压力。值得注意的是，原先主要关注AI技术与方法的研究共同体，也开始更加关注这些具有跨学科意义的问题。NeurIPS 2026将举办题为“AI for Meta-Science: Scaling and Organizing Science in the Age of AI Scientists”的研讨会，讨论同行评审、科研诚信、知识验证、科研评价、资助机制及科学治理等问题（AI for Meta-Science, 2026）。

在实践层面，一些新型科研组织正在主动开展科学制度创新。例如，Astera Institute明确将AI等新兴技术的发展与科学资助、科研组织及学术发表方式的变革联系起来（Astera Institute, 2024）。其Residency Program为难以获得传统科研资助的项目与创新者提供支持，并鼓励基础设施、工具、软件、标准及思想性成果等多样化的科研产出（Astera Institute, n.d.-a）。在科学知识交流方面，Astera将如何分享科学知识本身视为一个值得研究的问题，通过The Stacks等实践探索科研成果的开放传播与复用（Astera Institute, n.d.-b）。

Arcadia Science则在科研成果发表方面开展了持续的制度实验，包括分享不必符合传统期刊论文形式的科研成果、开放研究数据与方法、支持科研成果的版本化更新与公开反馈，以及由研究者对成果的发布及其科学诚信承担直接责任（Arcadia Science, n.d.）。这些实践并非全部由AI的发展所引发，但对于探索AI时代的科学知识交流机制具有借鉴意义。

科学制度创新不仅发生于新型科研组织，也发生于既有科研机构的内部。以英国为例，AI如何改变科学研究本身已经成为科研资助机构关注的重要研究议题。英国于2024年成立UK Metascience Unit（英国元科学部门），并将Science Systems in an AI Age（AI时代的科学体系）确定为2026—2028年的重点研究方向，具体涉及AI时代的科研评价与决策、AI如何改变科学研究以及科学计量学的发展（UKRI, 2026a）。

除了资助相关研究，英国研究与创新署（UKRI）也开始主动调整自身的科研资助机制。2026年9月10日，UKRI宣布改革科研基金评审机制，以应对申请数量增长及生成式AI发展所带来的挑战。自2026年10月起，UKRI推动八项改革措施，包括扩大分布式同行评议（Distributed Peer Review）的使用、尝试由机构工作人员进行初步筛选、试行多维度加权评价，以及开展AI辅助评审试验，同时坚持人类专家判断在资助决策中的核心地位（UKRI, 2026b）。

例如，UKRI于2026年9月启动的总额为500万英镑的科研资助计划“Enabling AI adoption across science and engineering”明确采用分布式同行评议机制，由申请团队同时承担其他申请项目的评审任务，并由元科学研究团队对该机制的运行过程及结果开展评估（UKRI, 2026c）。这里值得关注的是，科研资助机构不仅可以资助利用AI开展的科学研究，也可以资助关于AI如何改变科学研究的元科学研究，还可以针对AI带来的变化，对自身的科研资助机制开展实验与创新。

在学术出版领域，Floridi（2026）提出的AI-born Journals同样体现了一种值得关注的制度创新思路，即从学术期刊所承担的功能出发，重新分析哪些出版活动可以由AI承担，哪些决策则需要由人承担责任。Floridi尤其强调，学术期刊的独特价值在于将知识认证与期刊长期积累的学术信任联系起来，并由具名编辑在存在不确定性的情况下对发表决策承担责任。

**上述案例表明，科研制度本身也可以成为科学研究、实验与创新的对象。** 科研制度创新也并不一定需要从设计一套适用于所有学科的通用制度出发。某些重要的科研基础设施和制度创新，完全可能首先在特定科研实践中形成，然后逐渐被其他研究领域借鉴、改造和吸收。

## 5 AI-native科研思维方式与研究者成长

AI的发展正在不断拓展科学研究的可能性。前文所讨论的科研自动化技术、科研成果形态以及科研组织与制度的创新，也提示我们有必要保持更加开放的科研思维。随着知识生产能力边界的变化，我们对于什么是研究、如何开展研究、什么可以成为科研成果，以及科学研究可以采取怎样的组织形式等问题，都可以有新的认识与想象。**我们不应该用前AI时代的研究想象力，去驾驭AI时代的研究生产力。**

考虑到科学知识与科研实践的多样性，研究者也可以更加主动地探索和设计自己与AI的合作方式。不同的人机协作方式可能带来不同的研究路径。个体研究者对自身人机协作实践的记录、反思与分享，本身也可以成为AI时代一种具有独特价值的知识交流活动。

对于人类研究者而言，有必要区分知识成果的生产过程与知识创造者自身的成长过程。AI可以显著加速前者，但前者的加速并不自动意味着后者能够被跳过。生成一份文献综述、提出若干研究假设或完成一篇学术文本，与研究者真正形成对某个领域的理解、研究判断力、问题意识以及创造能力，并不是同一件事情。知识生产的工具正在发生革命性的变化，但人成为一个成熟的知识创造者，依然需要经历真实的学习、研究、实践与认知成长。

笔者同样关心的是，AI带来的科研生产力提升最终将如何影响科研人员的工作方式与生存状态。科研人员能否因此拥有更多满足自身好奇心的机会、更大的创造自由、更强的智识满足感以及更加自主的研究节奏？科研生产力的提升并不必然带来这些变化，也可能带来更高的产出期待、更激烈的竞争以及更快的工作节奏。**科学的未来，不仅关乎人类能够生产多少知识，也关乎人类能够以怎样的方式享受知识创造的过程。**

## 参考文献

Ai2. (2025). Asta: Accelerating science through trustworthy agentic AI. [https://allenai.org/blog/asta](https://allenai.org/blog/asta)

AI for Meta-Science. (2026). AI for Meta-Science: Scaling and Organizing Science in the Age of AI Scientists. *NeurIPS 2026 Workshop*. [https://ai4metascience.org/](https://ai4metascience.org/)

alphaXiv. (n.d.). Submission policy. [https://www.alphaxiv.org/docs/submission-policy](https://www.alphaxiv.org/docs/submission-policy)

Arcadia Science. (n.d.). About: Arcadia Science Publications. [https://research.arcadiascience.com/about](https://research.arcadiascience.com/about)

Astera Institute. (n.d.-a). Residency. [https://astera.org/residency/](https://astera.org/residency/)

Astera Institute. (n.d.-b). Open science. [https://astera.org/open-science/](https://astera.org/open-science/)

Astera Institute. (2024). Mission and vision. [https://astera.org/mission-and-vision/](https://astera.org/mission-and-vision/)

Aygün, E., et al. (2026). An AI system to help scientists write expert-level empirical software. *Nature, 654*, 909–916. [https://doi.org/10.1038/s41586-026-10658-6](https://doi.org/10.1038/s41586-026-10658-6)

Floridi, L. (2026). Everything but the signature: A proposal for AI-born journals (Version 2). *SSRN*. [https://ssrn.com/abstract=6992158](https://ssrn.com/abstract=6992158)

Golden, H. (2026, November 21). Anthropic worker claims to have solved a Holy Grail of math problems with the help of AI. *Associated Press*. [https://apnews.com/article/4fe8b69a891f160f9e7f0c85af8c55c8](https://apnews.com/article/4fe8b69a891f160f9e7f0c85af8c55c8)

Gottweis, J., et al. (2026). Accelerating scientific discovery with Co-Scientist. *Nature, 655*, 487–496. [https://doi.org/10.1038/s41586-026-10644-y](https://doi.org/10.1038/s41586-026-10644-y)

Kim, S., et al. (2026). ScholarCatalyst: A benchmark for retrieving papers that inspire new research. *arXiv*. [https://arxiv.org/abs/2610.02202](https://arxiv.org/abs/2610.02202)

Kim, S., & Lee, Y. (2026). Research intuition as a retrieval task. *Stanford AI Lab Blog*. [https://ai.stanford.edu/blog/scholarcatalyst/](https://ai.stanford.edu/blog/scholarcatalyst/)

Lean FRO & Mathlib Initiative. (2026, November 21). Lean verification of the Riemann Hypothesis. [https://leanprover-community.github.io/blog/posts/riemann-hypothesis/](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/)

Li, Z., et al. (2026). KISS—Knowledge infrastructure for scientific simulation: A scaffolding for agentic Earth science. *arXiv*. [https://arxiv.org/abs/2605.17856](https://arxiv.org/abs/2605.17856)

Liu, J., et al. (2026). The last human-written paper: Agent-native research artifacts. *arXiv*. [https://arxiv.org/abs/2604.24658](https://arxiv.org/abs/2604.24658)

Miao, J., et al. (2026). Reimagining research papers as interactive and reliable AI agents. *Nature, 658*, 1272–1280. [https://doi.org/10.1038/s41586-026-11044-y](https://doi.org/10.1038/s41586-026-11044-y)

Mitchener, L., et al. (2025). Kosmos: An AI scientist for autonomous discovery. *arXiv*. [https://arxiv.org/abs/2511.02824](https://arxiv.org/abs/2511.02824)

OpenAI. (2026, August 1). Ten advances in mathematics and theoretical computer science. [https://openai.com/index/ten-advances-in-mathematics/](https://openai.com/index/ten-advances-in-mathematics/)

Ren, Z., et al. (2026). EviGraph: Evidence-guided autonomous research agents. *arXiv*. [https://arxiv.org/abs/2608.04738](https://arxiv.org/abs/2608.04738)

UK Research and Innovation (UKRI). (2026a). UK Metascience Unit. [https://www.ukri.org/what-we-do/browse-our-areas-of-investment-and-support/uk-metascience-unit/](https://www.ukri.org/what-we-do/browse-our-areas-of-investment-and-support/uk-metascience-unit/)

UK Research and Innovation (UKRI). (2026b, September 10). UKRI modernises grant assessment for the age of AI. [https://www.ukri.org/news/ukri-modernises-grant-assessment-for-the-age-of-ai/](https://www.ukri.org/news/ukri-modernises-grant-assessment-for-the-age-of-ai/)

UK Research and Innovation (UKRI). (2026c, September 17). UKRI enabling AI adoption across science and engineering. [https://www.ukri.org/opportunity/ukri-enabling-ai-adoption-across-science-and-engineering/](https://www.ukri.org/opportunity/ukri-enabling-ai-adoption-across-science-and-engineering/)

Whiteside, A. (2025). Introducing “Commit”, a mini article for dynamic reporting of incremental improvements to previous scholarly work. *Digital Discovery Blog*. [https://blogs.rsc.org/dd/2025/01/23/introducing-commit-a-mini-article-for-dynamic-reporting-of-incremental-improvements-to-previous-scholarly-work/](https://blogs.rsc.org/dd/2025/01/23/introducing-commit-a-mini-article-for-dynamic-reporting-of-incremental-improvements-to-previous-scholarly-work/)

Zhang, L., et al. (2026). Bohrium + SciMaster: Building the infrastructure and ecosystem for agentic science at scale. *AI Plus, 1*(1), 100005. [https://doi.org/10.59717/ipj.aiplus.2026.100005](https://doi.org/10.59717/ipj.aiplus.2026.100005)