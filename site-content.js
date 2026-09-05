'use strict';

module.exports = {
  zh: {
    about: {
      intro: 'Sun-Shine.ai（顺晟智能）是一家以人工智能、数据技术和 Agent 系统为核心的企业智能化服务公司。我们围绕企业增长、经营决策与技术建设，将战略规划、业务设计、系统开发和持续运营连接起来，帮助企业把经验与流程沉淀为可重复使用的能力。',
      mission: '帮助企业实现增长数字化、经营智能化和业务全球化，把个人经验、团队能力和企业流程沉淀为可复制、可执行、可持续迭代的智能系统。',
      vision: '以全球化和智能化为长期方向，建设能够理解业务、制定方案、执行任务、验证结果并持续优化的企业智能基础设施，让企业拥有持续增长、持续决策与持续进化的能力。',
      orgNote: '以下为围绕四大产品方向设计的业务协作架构，说明各方向如何共同服务客户；不代表正式部门设置、人员编制或汇报关系，也不表示所有规划能力均已上线。',
      org: [
        ['Sun-Shine Growth｜增长与海外营销', '围绕获客、内容、SEO/GEO、广告、电商和销售转化组织增长工作，将市场问题与客户反馈带入数据分析和产品改进。'],
        ['Sun-Shine Intelligence｜数据与经营决策', '连接业务数据，建立指标口径，开展经营分析、风险识别和决策建议，为增长与执行提供可追溯的依据。'],
        ['Sun-Shine Agent OS｜任务与业务协同', '围绕 Agent 管理、工作流、多 Agent 协作、权限审批和任务状态设计执行机制，是企业智能基础设施的长期建设方向。'],
        ['Sun-Shine Engineering｜研发与技术交付', '通过软件开发、系统集成、代码智能化、测试发布和技术架构建设，将业务方案落实为可验证、可维护的系统。']
      ],
      historyNote: '这里呈现战略文档中的发展路线，而非带有成立年份或已完成里程碑的公司年表。各阶段表达能力建设的递进方向；AI Commerce 与企业级 Agent OS 属于持续探索和长期建设方向，不代表已全部实现。',
      history: [
        ['海外营销｜从市场与客户问题切入', '围绕目标市场、品牌定位、内容、渠道和询盘转化，形成面向企业出海的服务方向。'],
        ['数字化增长｜连接业务数据', '沿着渠道、内容、用户、询盘、成交和复购的路径，推动增长工作与数据分析、客户管理和经营判断衔接。'],
        ['GEO｜延伸到 AI 搜索场景', '围绕用户提问、品牌知识和产品内容，规划 AI 答案观察、引用分析与内容优化，探索品牌被理解和推荐的机会。'],
        ['AI Commerce｜面向交易衔接持续探索', '将 AI 曝光与访问、询盘、交易及复购联系起来，逐步探索可追溯的增长路径和相应的协作方式。'],
        ['Agent OS｜长期建设企业智能基础设施', '以知识库、流程编排、权限审批、结果验证和失败恢复为建设方向，逐步把业务经验沉淀为可持续迭代的企业级 Agent 系统。']
      ]
    },
    posts: [
      {
        slug: 'connect-growth-to-business-outcomes',
        title: '从渠道到复购：先把增长路径连接起来',
        summary: '以一条询盘为起点，梳理内容、客户记录与销售反馈，让下一步增长行动有据可查。',
        category: '增长方法',
        sections: [
          ['先选一个业务问题', 'Sun-Shine 的增长思路沿着渠道、内容、用户、询盘、成交和复购展开。落地时，可以先选择“某类产品的询盘为什么没有进入下一步”这样的具体问题，明确对应产品、目标市场和期望动作，再决定需要查看哪些渠道与内容。'],
          ['为询盘保留上下文', '建议在客户记录中保留访问来源、相关页面、产品需求、客户提出的问题以及当前跟进状态。能够确认的信息按原样记录，无法确认的来源标记为未知；不要因为客户看过某篇内容，就直接把成交归给该内容。'],
          ['把销售反馈带回内容', '如果客户反复询问规格、适用场景或交付条件，可以先核对企业已有资料，再将确认后的答案补充到产品页与 FAQ。销售跟进中尚未解决的问题，也应进入内容待办，让页面调整围绕真实需求展开。'],
          ['让每次复盘产出可验证的任务', '复盘时，选择一个明确动作，例如补齐某产品的应用说明，并记录负责人、修改原因和后续观察方式。再检查客户是否仍提出同类疑问、询盘是否进入下一阶段。把这些反馈写回客户与任务记录，为下一轮调整留下依据；没有足够记录时，保留不确定性。']
        ]
      },
      {
        slug: 'build-geo-content-from-customer-questions',
        title: '从客户问题出发，组织 GEO 内容',
        summary: '把客户问题、已核实的产品知识和答案观察连接起来，形成可维护的内容工作流。',
        category: 'GEO 与内容',
        sections: [
          ['把提问整理成地图', 'Sun-Shine 将 Prompt 地图、品牌知识与 AI 答案观察纳入 GEO 方向。实践中可先收集销售沟通和售后反馈里的问题，按选型、使用、比较与采购条件归类，并标明目标市场和语言。每个问题都应关联一个真实需求，而不是只围绕品牌名称展开。'],
          ['让每个答案有资料可查', '为每类问题指定可核对的产品资料和维护负责人。内容可以说明适用场景、选择条件与已知限制；涉及尚未确认的规格或服务承诺时，应先补充内部核实。中英文页面应保持事实与适用条件一致，避免翻译时扩大承诺。'],
          ['区分发布内容与观察结果', '记录已发布页面、对应问题与内容版本，再单独记录观察到的 AI 回答、引用页面和观察时间。一次出现或未出现只能作为该次观察的记录，不能直接推导稳定的推荐表现；发布内容也不意味着一定会被引用或推荐。'],
          ['让内容维护回到业务需求', '将答案中遗漏的条件与客户实际追问放在一起检查，优先修正不清楚、不一致或过时的说明。若后续出现访问或询盘，只在有依据时记录其来源。这样的工作流把 GEO 与品牌知识库、产品页和客户反馈连接起来，也为持续复盘保留材料。']
        ]
      },
      {
        slug: 'design-an-agent-task-that-can-be-verified',
        title: '把 Agent 场景写成一项可验证的业务任务',
        summary: '围绕目标、数据、工具、流程、权限和验证机制，把业务经验整理为可交付的 Agent 方案。',
        category: 'Agent 工程',
        sections: [
          ['从交付物定义目标', 'Sun-Shine 的 Agent Factory 思路将 Agent 拆分为目标、能力、数据、工具、流程、权限和验证机制。以“整理待跟进询盘”为例，先约定交付物包含哪些客户记录、缺失信息与建议动作，并明确由谁验收，才能判断任务是否完成。'],
          ['明确数据与行动边界', '列出任务需要读取的客户资料、允许使用的工具和可以写入的位置。为对外发送、修改客户状态等动作设置明确的授权与审批条件。资料不足时应返回待补充项，不能自行编造客户需求，也不能将生成建议视作获准执行。'],
          ['为中断和失败设计路径', '工作流应区分待处理、执行中、待审批、完成和失败等状态。遇到资料冲突、工具不可用或写入失败时，记录已执行的步骤与未完成事项，再交由负责人决定补充信息或恢复执行。恢复前检查是否已有成功结果，避免重复发送或重复写入。'],
          ['用验收与写回完成交付', '验收时逐项核对客户记录是否有来源、待补充项是否清楚、建议是否超出权限，以及写入结果是否与预期一致。将确认后的结果和处理状态写回指定系统，再把例外情况整理为后续改进材料。这是面向长期 Agent OS 建设的一种任务设计方法，不代表全部能力已经上线。']
        ]
      }
    ]
  },
  en: {
    about: {
      intro: 'Sun-Shine.ai is an enterprise intelligence services company built around artificial intelligence, data technology, and Agent systems. We connect strategic planning, business design, system development, and ongoing operations across growth, business decisions, and technology delivery, helping companies turn experience and processes into reusable capabilities.',
      mission: 'Help enterprises digitize growth, bring intelligence to operations, and expand globally by turning individual experience, team capabilities, and business processes into intelligent systems that can be replicated, executed, and continuously improved.',
      vision: 'With globalization and enterprise intelligence as our long-term direction, build infrastructure that understands business needs, develops plans, executes tasks, verifies results, and improves over time, supporting sustained growth, decision-making, and organizational learning.',
      orgNote: 'This business collaboration structure describes how four product directions are designed to work together for clients. It does not represent formal departments, staffing, or reporting lines, and does not imply that all planned capabilities are already available.',
      org: [
        ['Sun-Shine Growth | Growth and overseas marketing', 'Organizes acquisition, content, SEO/GEO, advertising, commerce, and sales conversion, bringing market questions and customer feedback into data analysis and product improvement.'],
        ['Sun-Shine Intelligence | Data and business decisions', 'Connects business data, defines consistent metrics, and supports operational analysis, risk identification, and decision recommendations, providing traceable evidence for growth and execution.'],
        ['Sun-Shine Agent OS | Tasks and business coordination', 'Designs execution mechanisms around Agent management, workflows, collaboration between Agents, permissions, approvals, and task states as a long-term direction for enterprise intelligence infrastructure.'],
        ['Sun-Shine Engineering | Development and technical delivery', 'Turns business plans into verifiable, maintainable systems through software development, integration, code intelligence, testing, releases, and technical architecture.']
      ],
      historyNote: 'This is the strategic progression described in our strategy document, not a dated company history or a list of completed milestones. The stages express a direction for capability development. AI Commerce and enterprise Agent OS remain areas of ongoing exploration and long-term development, rather than fully realized achievements.',
      history: [
        ['Overseas marketing | Start with markets and customers', 'Develop a service direction for global expansion around target markets, brand positioning, content, channels, and inquiry conversion.'],
        ['Digital growth | Connect business data', 'Connect growth activities with data analysis, customer management, and business decisions along the path from channels and content to users, inquiries, sales, and repeat purchases.'],
        ['GEO | Extend into AI search', 'Plan AI answer observation, citation analysis, and content improvement around customer questions, brand knowledge, and product information, exploring opportunities for brands to be understood and recommended.'],
        ['AI Commerce | Explore connections to transactions', 'Connect AI visibility with visits, inquiries, transactions, and repeat purchases, progressively exploring traceable growth paths and the collaboration they require.'],
        ['Agent OS | Build enterprise intelligence infrastructure over time', 'Develop toward knowledge bases, workflow orchestration, permissions, approvals, result verification, and failure recovery, gradually turning business experience into enterprise Agent systems that can continuously improve.']
      ]
    },
    posts: [
      {
        slug: 'connect-growth-to-business-outcomes',
        title: 'From channels to repeat purchases: connect the growth journey',
        summary: 'Start with a customer inquiry and connect content, customer records, and sales feedback to give the next growth action a traceable basis.',
        category: 'Growth methods',
        sections: [
          ['Choose a business question first', 'Sun-Shine approaches growth through channels, content, users, inquiries, sales, and repeat purchases. To put this into practice, start with a specific question such as why inquiries about a product category are not moving forward. Define the product, target market, and desired next action before deciding which channels and content to examine.'],
          ['Preserve the context of each inquiry', 'Consider recording the visit source, relevant page, product requirements, customer questions, and current follow-up status in the customer record. Record confirmed information as it stands and mark unconfirmed sources as unknown. A customer having viewed an article does not, by itself, establish that the article caused a sale.'],
          ['Bring sales feedback back into content', 'When customers repeatedly ask about specifications, use cases, or delivery conditions, check existing company materials first, then add verified answers to product pages and FAQs. Unresolved questions from sales conversations should also enter the content backlog so that page updates address actual needs.'],
          ['Turn each review into a verifiable task', 'Choose a concrete action during the review, such as adding application guidance to a product page, and record its owner, rationale, and follow-up observation method. Then check whether customers still ask the same questions and whether inquiries move to the next stage. Write this feedback back to customer and task records to inform the next adjustment, preserving uncertainty where records are insufficient.']
        ]
      },
      {
        slug: 'build-geo-content-from-customer-questions',
        title: 'Build GEO content around customer questions',
        summary: 'Connect customer questions, verified product knowledge, and observations of AI answers in a content workflow that can be maintained over time.',
        category: 'GEO and content',
        sections: [
          ['Map the questions', 'Sun-Shine includes Prompt mapping, brand knowledge, and AI answer observation in its GEO direction. Start by collecting questions from sales conversations and after-sales feedback, grouping them by selection, use, comparison, and purchasing conditions, and noting the target market and language. Each question should connect to an actual need rather than focus only on the brand name.'],
          ['Give each answer a verifiable basis', 'Assign reference product materials and a maintenance owner to each question group. Content can explain use cases, selection criteria, and known limitations. Verify unconfirmed specifications or service commitments internally before publishing them. Chinese and English pages should preserve the same facts and conditions without expanding promises during translation.'],
          ['Separate published content from observed results', 'Record published pages, the questions they address, and content versions, then separately record observed AI answers, cited pages, and observation times. A single appearance or absence is a record of that observation, not evidence of consistent recommendation performance. Publishing content also does not guarantee citation or recommendation.'],
          ['Bring maintenance back to business needs', 'Compare conditions missing from answers with actual customer follow-up questions, prioritizing unclear, inconsistent, or outdated explanations. If visits or inquiries follow, record their sources only when supported by evidence. This workflow connects GEO with the brand knowledge base, product pages, and customer feedback while preserving material for ongoing review.']
        ]
      },
      {
        slug: 'design-an-agent-task-that-can-be-verified',
        title: 'Turn an Agent use case into a verifiable business task',
        summary: 'Use goals, data, tools, workflows, permissions, and verification to turn business experience into an Agent delivery plan.',
        category: 'Agent engineering',
        sections: [
          ['Define the goal through the deliverable', 'Sun-Shine’s Agent Factory approach breaks an Agent down into goals, capabilities, data, tools, workflows, permissions, and verification mechanisms. For a task such as organizing inquiries that need follow-up, first agree on which customer records, missing information, and suggested actions the deliverable should contain, and who will accept it. This makes completion assessable.'],
          ['Set boundaries for data and actions', 'List the customer information the task needs to read, the tools it may use, and the destinations it may write to. Define authorization and approval conditions for actions such as sending external messages or changing customer status. When information is insufficient, return a list of missing items instead of inventing customer requirements or treating generated suggestions as permission to act.'],
          ['Plan for interruptions and failures', 'The workflow should distinguish states such as pending, running, awaiting approval, complete, and failed. When information conflicts, a tool is unavailable, or a write fails, record completed steps and unfinished work so the owner can decide whether to supply information or resume execution. Before resuming, check for existing successful results to avoid duplicate messages or writes.'],
          ['Complete delivery through acceptance and write-back', 'During acceptance, check that customer records have sources, missing information is clearly identified, suggestions stay within permissions, and written results match expectations. Write confirmed results and processing status back to the designated system, then collect exceptions as material for future improvements. This is a task design method supporting the long-term Agent OS direction, not a claim that every capability is already available.']
        ]
      }
    ]
  }
};
