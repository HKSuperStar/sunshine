# Sun-Shine AI 官网内容重构计划

## 品牌视频合成计划（2026-08-25/26）

### 目标与范围

把 `video/01a.mp4` ~ `video/01e.mp4`（5 段，均为 1280×720 / h264 / 24fps / 恰好 10.005s，规格完全一致，可直接拼接）剪辑合并为一条完整品牌短片，剪掉重复/冗余片段，叙事顺序对齐 sunshine.ai 官网整体内容（出海供应链 → GEO/AI 搜索优化 → Agent OS/多 Agent 协作 → 四大产品体系收束）。产出一个新的合成视频文件，**不**自动替换现有首页 hero 背景视频（`01_outbound.mp4`，10s 自动循环，用途不同）——是否接入网站是后续单独决定。

### 素材初勘（5 帧/条抽样已完成）

- **01a**：全球贸易/供应链（飞机·火车·船·床垫/健身车等实体产品）→ 世界地图看板 → SUNSHINE.AI 收尾卡片（"Global Intelligence & Growth"）。
- **01b**：GEO & AI Search Optimization（设备 + Reddit/Quora/Wikipedia/Medium 搜索引擎光束，文字停留较长）→ "Full-Link Closed Loop" 看板 → Sun-Shine.ai 收尾卡片（"Build Your Intelligent Enterprise System"）。
- **01c**："Full-Link Closed Loop" 看板（与 01b 结尾重复）→ "Powered by Agent OS" 工作流图 → 多 Agent 协作全息场景（Traffic/Market Analysis/Customer Service Agent）→ 看板收尾。
- **01d**：悬浮玻璃立方体依次标注 **Growth / Intelligence / Agent OS / Engineering**（与官网刚重写的四大产品体系完全对应，视觉上是最贴合当前内容的片段）→ 隧道汇聚到金色 S logo → Sun-Shine.ai 收尾卡片（与 01b 结尾同款，长时间静止）。
- **01e**：地球 + "AI GROWTH PLATFORM" 看板（与 01a/01b/01c 看板主题重复）→ "AGENT OS · STANDARDIZED SYSTEM" Agent 网络场景（与 01c 主题重复）→ SUNSHINE.AI 收尾卡片（"Intelligent Opera…"，第三种收尾卡样式）。

**冗余判断**：5 段各自独立生成，各自带"看板"过场和"收尾 logo 卡"，直接拼接会在视频中段反复出现 3~4 次几乎相同的收尾卡和抽象看板镜头，打断叙事。需要保留每个主题唯一一次、精简看板过场，只在全片最后保留一次收尾卡。

### 并发切片

- **Slice A（5 路并发，逐条精修分镜）**：对 01a~01e 各起一个 fork agent，以 0.5s 间隔抽帧、生成分镜表（时间点 + 画面描述），标注：可裁剪的静止/冗余镜头（结合已知的跨条重复主题）、值得完整保留的独特/贴合品牌内容的镜头，给出建议的 in/out 时间点（精确到 0.1s）。
- **Slice B（主线程，跨条叙事编排）**：汇总 5 份分镜表后，决定最终顺序、每段的精确裁剪区间、转场方式（硬切 vs 交叉淡化），产出一份 ffmpeg trim+concat 方案。
- **Slice C（主线程，渲染与校验）**：执行 ffmpeg 裁剪/拼接，抽帧校验成片，用户确认后再考虑是否接入网站。

### 实际执行结果（2026-08-25）

并发 fork 编排在实际执行中受阻（第 2 个 Agent 调用报错 "Fork is not available inside a forked worker"，怀疑与本轮会话此前的 autonomous-loop tick 状态有关），改为主线程直接对 5 条素材逐一做 0.5s 间隔精细抽帧 + contact sheet 审阅，效果等价，只是牺牲了原计划的多路并发。

**最终剪辑决策（5 段，4 处 0.35s gold-flare 交叉淡化转场，成片 20.75s，1280×720/24fps/h264，静音）**：
1. `01a[0.0–6.3s]` 贸易/供应链蒙太奇 + 世界地图看板（对应"全球化增长"）
2. `01b[0.0–4.8s]` GEO & AI Search Optimization（Reddit/Quora/Wikipedia/Medium，对应 Sun-Shine Growth 支柱）
3. `01d[0.0–3.2s]` 悬浮立方体 Growth/Intelligence/Agent OS/Engineering（直接对应官网四大产品体系）
4. `01c[7.0–9.9s]` 多 Agent 协作全息场景（Sales/Market Analyst/Customer Service Agent，对应 Sun-Shine Agent OS）
5. `01d[3.2–8.0s]` 金色 S logo 汇聚 → "Sun-Shine.ai: Build Your Intelligent Enterprise System" 收尾卡（全片唯一一次收尾卡）

**01e 整条弃用**：细看后发现它的三个镜头（地球+看板／Agent 网格／收尾卡）分别与 01a、01c、01b·01d 已重复，是五条里冗余度最高的一条，直接排除比截取零星片段更干净。

**音频**：五条素材各自带独立 AAC 音轨（很可能配乐互不相配），本轮任务明确只谈"内容/画面"合并，未涉及音频要求，为避免拼出杂乱的配乐撞车，成片按静音交付；如需配乐/旁白是后续单独任务。

产出：`video/sunshine-brand-reel.mp4`（原 `01_outbound.mp4` 未被覆盖）。

### 验收标准

- [x] 成片时长明显短于 50.025s 原始总和（20.75s），无重复的收尾卡片段（只在片尾出现一次）。
- [x] 叙事顺序对应官网内容（出海供应链 → GEO/AI 搜索 → 四大产品体系 → Agent OS/多 Agent 协作 → 收尾）。
- [x] 音视频编码一致、无花屏/黑帧/跳帧；4 处转场经抽帧复核，转场自然（金色光效作为素材间共通的视觉语言）。
- [x] 产出文件不覆盖 `01_outbound.mp4`，落在 `video/sunshine-brand-reel.mp4`。
- [x] 抽帧校验成片内容（覆盖 5 段内部 + 4 处转场 + 片尾）后再交付。
- [ ] 是否接入网站（如替换/新增到某个页面区块）——未做，需用户确认。

### 追加：英文女声旁白 + 背景音乐（2026-08-26）

- 旁白：macOS `say -v Samantha`（系统自带，无需外部 API/key），按 4 段视觉节拍分句，逐句按 `01a/01b/01d+01c/01d` 的时间轴起点对齐（0s / 5.95s / 10.4s / 15.8s），第 3 句用 `atempo=1.2` 微调语速以匹配较短的镜头窗口。
- 背景音乐：**非授权曲库素材**——用 ffmpeg 合成的原创环境音床（五个正弦波叠加简单和弦 + 低通 + 回声 + 首尾淡入淡出），旁白出现时自动 duck 到约 -13dB。选用合成音乐是为了避免版权风险，音色偏简单/氛围向，不是正式配乐制作。
- 混音：旁白与音乐分别过 `volumedetect` 校验电平，最终过 `alimiter` 防削波，裁到与视频等长的 20.75s，`silencedetect` 确认全程无异常静音。
- 产出：`video/sunshine-brand-reel-narrated.mp4`（视频轨用 `-c:v copy` 保留，不重新编码画面；仅新增 AAC 立体声音轨）。原 `video/sunshine-brand-reel.mp4`（静音版）保留未删。
- **未做**：没有人工试听校验发音（"AI""Agent OS""Sun-Shine.ai" 等词的实际读法只能靠 TTS 引擎默认处理，未做人耳复核）；背景音乐是合成音色而非真实录制配乐；未接入网站。

**中文女声版（2026-08-26 追加）**：改用 macOS `say -v Tingting`（zh_CN 系统女声），文案对应四段视觉节拍并直接复用官网原文措辞——① 出海供应链（"Sun-Shine 帮助中国品牌走向全球市场，连接供应链的每一个环节"）② GEO/AI 搜索（"让品牌被 AI 搜索看见、理解、推荐"）③ 四大体系（逐字念出 `business[]` 的中文标题："增长引擎、经营智能、Agent 操作系统、智能工程，四大体系协同运转"）④ 收尾用官方中文名"顺晟智能，从一个真实的问题开始"（未沿用英文版的 "Sun-Shine.ai" 读法，避免中英混读别扭）。因中文语音比预估长，第 1/3 句分别用 `atempo=1.05`/`1.20` 微调、第 4 句起点相应顺延到 16.7s，背景音乐 duck 窗口同步重新计算。产出 `video/sunshine-brand-reel-narrated-zh.mp4`，同样 20.75s、`-c:v copy` 未改画面、削波和静音检测均通过。

## 战略文档驱动的官网升级计划（2026-08-25）

### 目标与范围

根据 `doc/Sun-Shine 公司战略目标与业务范围.md` 升级官网内容层，使其准确反映公司四大产品体系（Sun-Shine Growth / Intelligence / Agent OS / Engineering）、十大业务范围、五种商业模式与八条核心竞争力。当前 `#services`（四个业务板块）仍沿用早期 GEO 专属框架（AI Visibility / Commerce Intelligence / Growth Operations / Outcome Intelligence），未对齐战略文档 §四 的官方四大产品体系命名；`#products` 模块未覆盖十大业务范围；商业模式与核心竞争力完全缺失。

### 架构决策

- 保持现有单页信息架构、`sunshine-content.js` 双语内容模型、`sunshine-app.js` 原生渲染管线，不引入新依赖或新运行时。
- `#services`（四个业务板块）与 `#products`（产品模块）统一重构为围绕四大产品体系：`#services` 是每个体系的问题-承诺卡片，`#products` 是每个体系的旗舰产品 + 模块 chips，chips 合计覆盖十大业务范围。
- 新增两个区块，复用现有 `proof-grid` / `positioning-grid` 卡片视觉模式（编号卡片 + 轻边框 + 浅色底）：
  - `#business-model`（商业模式，5 项：企业智能化项目 / 年度顾问与运营 / SaaS 与 Agent 订阅 / 效果分成 / 战略合作与联合运营），置于 `#delivery-agents` 之后、`#proof` 之前，`bg-white`。
  - `#capabilities`（核心竞争力，8 条“懂 X 而不仅是懂 Y”断言），置于 `#positioning` 之后、行业区块之前，`bg-mist`，卡片样式简化为要点行（非编号大卡）。
- 不新增顶部导航项（沿用现状：`#faq`/行业区块本就无导航入口），避免桌面导航拥挤。
- 顺带重新连续编号所有区块 kicker（01–11），修复既有 `05`/`06` 重复编号问题。
- 首次为该目录建立 git 版本控制（此前无 VCS，生产站点无法安全回滚），已提交基线快照 `6a3c333` 后再执行本轮改动。

### 并发切片

- **Slice A（结构与渲染，Agent 独立执行）**：在 `index.html` 新增 `#business-model`、`#capabilities` 两个 `<section>`（含 kicker/title/description 占位 id 与 grid 容器），在 `sunshine-app.js` 的 `renderPage()` 中新增对应渲染逻辑，读取 `C.businessModel` / `C.capabilities`（形状见下），渲染前以 `if (C.xxx)` 守卫，**不写 `sunshine-content.js`**，避免与内容编辑并发冲突。
- **Slice B（内容重写，主线程直接编辑 `sunshine-content.js`）**：改写 `business[]`（4 张体系卡）、`products.items`（4 张旗舰产品卡 + 覆盖十大业务范围的 modules chips）、新增 `businessModel{}`、`capabilities{}`（中文）、更新 `industries.items`（对齐文档九大目标行业）、新增 2 条 FAQ、微调 `hero.description`/`hero.layers`、`architecture.description`（融入“海外营销→数字化增长→GEO→AI Commerce→Agent OS”路径）、统一重排各 kicker 编号。
- **Slice C（翻译，依赖 Slice B 完成）**：Slice B 完成后，将新增/改写的中文内容整体交付翻译，产出对应英文文本，保持既有英文语气与术语（GEO/GMV/SKU/CRM/MOQ/SLA 及 Sun-Shine Growth/Intelligence/Agent OS/Engineering 等专有名词不译）。

### 内容契约（新区块）

```
businessModel: { kicker, titlePlain, titleHighlight, description, items: [[title, desc], ...] }  // 5 项
capabilities:  { kicker, titlePlain, titleHighlight, description, items: [line, ...] }             // 8 项（纯字符串）
```

### 验收标准

- [ ] `#services`/`#products` 内容与四大产品体系一致，十大业务范围全部在 `#products` modules chips 中可追溯。
- [ ] `#business-model`、`#capabilities` 区块渲染正常，中英文切换同步，移动端不溢出。
- [ ] `industries`、`faq` 更新且不引入文档未覆盖的事实性宣称。
- [ ] `npm run build`（Tailwind）通过；浏览器 320/768/1024/1440 视口验收无横向溢出、无 JS 报错。
- [ ] 未破坏现有锚点、语言切换持久化与联系表单交互。
- [ ] 完成后提交一次 git commit（此前已建立基线 `6a3c333`），便于对比与回滚。

## 数据、研发与任务执行 Agent 官网集成计划（2026-08-21）

### 目标与范围

将 `agents/dev` 的研发与执行意图转译到 Sun-Shine.ai 官网。经审查，`agents/dev/page.tsx` 与已有 growth/ops 页面完全相同，缺少真实的开发与交付内容；本次重新建立“数据洞察、研发协同、任务编排、质量交付”四个 Agent，形成从数据发现到研发落地的闭环。

### 架构决策

- 不直接复用 `agents/dev/page.tsx` 的客户增长内容，避免语义错配。
- 沿用当前双语内容模型和原生 tabs 工作台，保持 Sun-Shine 蓝金 VI、浅色页面层次和现有语言切换。
- 本轮展示能力与工作流，不接触代码仓库、生产数据或任务系统；未来真实接口预留为 `POST /api/delivery-agent`，由服务端负责鉴权、审计和工具权限。

### 并发切片

- **Slice A：研发能力内容**：中英文建立数据洞察、研发协同、任务编排、质量交付四个 Agent 的问题、输入、输出和审批边界。
- **Slice B：官网工作台**：在经营与供应链区块后新增“数据、研发与任务执行 Agent”工作台及导航入口。
- **Slice C：交互与边界**：实现 tabs、语言同步、键盘状态和“连接工具后执行”的明确说明，不伪造代码操作或任务执行结果。

### 验收标准

- [ ] 页面出现“数据、研发与任务执行 Agent”区块，四个 Agent 可切换。
- [ ] 每个 Agent 展示工作问题、连接数据/工具、输出结果和人工审批边界。
- [ ] 中英文切换同步覆盖该区块，移动端不溢出。
- [ ] 静态构建、脚本检查和结构验收通过；不创建伪造 API。

## 经营与供应链 Agent 官网集成计划（2026-08-21）

### 目标与范围

将 `agents/ops` 的“运营控制台”意图转译到 Sun-Shine.ai 官网。经审查，`agents/ops/page.tsx` 与 `agents/growth/page.tsx` 完全相同，缺少真实的经营/供应链内容；本次基于 `operations.css` 的控制台方向和业务主题重新建立四个 Agent：经营诊断、需求预测、采购补货、库存履约。

### 架构决策

- 不直接复用错误的 `agents/ops/page.tsx` 内容，也不把增长 Agent 改名冒充供应链能力。
- 沿用当前静态站双语内容模型和原生 tabs 工作台，保持 Sun-Shine 蓝金 VI、浅色层次和现有语言切换。
- 本轮集成能力展示，不接触真实订单、库存、供应商或财务数据；未来真实接口预留为 `POST /api/operations-agent`，由服务端负责鉴权、数据脱敏和模型调用。

### 并发切片

- **Slice A：经营与供应链内容**：中英文建立四个 Agent 的问题、输入、输出和风险边界。
- **Slice B：官网工作台**：在客户与增长 Agent 后新增经营与供应链 Agent 区块，增加运营信号流视觉和模块导航。
- **Slice C：交互与边界**：实现 tabs、语言同步、键盘状态和“连接数据后执行”说明，避免静态演示造成真实运行误解。

### 验收标准

- [ ] 页面出现“经营与供应链 Agent”区块，四个 Agent 可切换。
- [ ] 每个 Agent 展示经营问题、连接数据、输出结果和人工审批边界。
- [ ] 中英文切换同步覆盖该区块，移动端不溢出。
- [ ] 静态构建、脚本检查和结构验收通过；不创建伪造 API。

## 客户与增长 Agent 官网集成计划（2026-08-21）

### 目标与范围

将 `agents/growth/page.tsx` 中的四类 Agent 能力转译到当前静态 Sun-Shine.ai 官网，新增一个与现有蓝金 VI 一致的“客户与增长 Agent”交互区。首阶段集成 Agent 的定位、问题、输入、输出和增长闭环展示；当前目录没有后端 API 或模型调用，本阶段不宣称 Agent 已在线执行真实分析。

### 架构决策

- 不直接嵌入独立 Next.js 页面，避免引入第二套运行时；将 Agent 数据抽到当前静态站的双语内容模型。
- 使用原生 JavaScript tabs 实现四个 Agent 切换，复用现有语言切换、可访问性和页面构建链。
- 为后续真实调用预留接口边界：`POST /api/growth-agent`，输入品牌/目标/渠道/问题，返回结构化 `summary`、`insights`、`nextActions`；本轮不创建伪造 API。

### 并发切片

- **Slice A：Agent 内容转译**：把获客、增长、用户画像、用户运营四个 Agent 转成中英文结构化数据，保留问题/输入/输出/色彩语义。
- **Slice B：官网区块与视觉**：在产品与价值证明之间增加 Agent 工作台，使用 Sun-Shine 蓝金色、轻边框和清淡背景，不复制原 Next 页面深色主题。
- **Slice C：交互与接口边界**：实现 tabs、当前 Agent 状态、进度和 CTA；补充“当前为能力演示，真实诊断需预约”的明确文案。

### 验收标准

- [ ] 官网出现“客户与增长 Agent”区块，四个 Agent 可切换。
- [ ] 每个 Agent 展示定位、关键问题、连接数据和输出结果。
- [ ] 中英文切换同步覆盖 Agent 区块，刷新语言选择仍保持。
- [ ] 移动端无横向溢出，键盘可操作 tabs，当前项有明确状态。
- [ ] 不把静态能力展示误写为已连接真实 AI；后续真实 API 另行实现。

## 中英文切换功能计划（2026-08-21）

### 目标

在页面顶部右上角增加可访问的中文/English 切换按钮，实现整页主要公开文案的中英文切换；中文为默认语言，用户选择保存到 `localStorage`，刷新后保持选择。视觉继续使用现有 Sun-Shine 蓝金双色和清淡主题。

### 并发切片

- **Slice A：语言数据模型**：为 hero、业务、流程、产品、价值证明、行业、FAQ、联系区和导航补充 English 文案；保留现有数据结构可扩展性。
- **Slice B：切换控件与样式**：在桌面右上角加入 `中文 / EN` segmented button，窄屏保持可见、键盘可操作，并补充 focus/active 状态。
- **Slice C：渲染与持久化**：建立统一 `setLanguage` / `renderPage` 流程，切换 `lang`、标题、描述、导航、静态文本和动态卡片，安全处理本地存储异常。

### 验收标准

- [ ] 默认中文显示；点击 English 后整页主要可见文案切换为英文。
- [ ] 点击中文可恢复中文；刷新页面保持上一次语言选择。
- [ ] 桌面端按钮位于页面顶部右上角；320px 和 768px 下不溢出。
- [ ] 按钮具备清晰的 `aria-pressed`、键盘焦点和当前状态。
- [ ] 构建、脚本检查和 320/768/1024/1440 浏览器验收通过。

## ChatGPT 会话驱动的二次内容升级计划（2026-08-20）

### 目标

读取用户提供的 ChatGPT 会话，在不原样复制会话内容的前提下，提炼其中与 Sun-Shine.ai 相关的战略判断、业务模型、产品能力、流程、客户价值和可信度证据，升级现有官网的内容层。视觉系统继续沿用 Sun-Shine 的深海军蓝、金黄色、米白背景和清淡层次。

### 执行顺序与并发切片

1. 会话采集（高风险前置）：通过当前已登录浏览器读取会话标题、用户问题、最终结论和可复用事实；无法访问时停止内容改写，不猜测会话内容。
2. 本地结构审查（可并发）：检查 `index.html`、`sunshine-content.js`、SVG 资产、页面锚点、构建配置和现有内容模型。
3. 内容转译（依赖 1）：建立“会话原意 → Sun-Shine 自有表达 → 页面位置”的映射，过滤敏感信息、内部过程、重复观点和不适合公开的承诺。
4. 页面改造（依赖 3）：并发更新文案模型、区块标题/CTA、FAQ/流程/产品描述；视觉只在内容需要时调整，不复用会话中的原图或原文。
5. 验收发布（依赖 4）：执行构建、HTML/脚本检查、320/768/1024/1440 浏览器验收，用户确认后再部署 Production。

### 内容改造原则

- 不复制 ChatGPT 会话的原句、段落结构或私密信息；只提炼可公开的观点和业务事实。
- 不把未经证实的商业结果、客户名称、收入数字、合作关系或产品承诺写成官网事实。
- 保留现有 Sun-Shine VI：蓝金双色、浅色底、轻边框、克制阴影和可访问的移动端导航。
- 所有改动优先落在 `sunshine-content.js`；页面结构只在信息层级确实需要时调整。

### 验收标准

- [ ] 已读取并整理用户提供会话的可访问内容；当前阻塞：Web 抓取返回 Cache miss，浏览器自动化仅返回空白标签页。
- [ ] 形成会话观点到官网区块的内容映射，且无敏感信息和原文大段复用。
- [ ] 官网仍清晰回答：Sun-Shine 是什么、解决什么问题、如何工作、有哪些产品、客户如何开始。
- [ ] 通过静态构建、脚本检查和 320/768/1024/1440 浏览器验收。
- [ ] 用户确认后才部署 Production。

### 当前阻塞与继续条件

用户提供的会话链接目前无法在本环境读取正文。继续内容改造需要以下任一条件：用户在已登录浏览器中打开该会话并提供可读页面，或将会话导出为 Markdown/HTML/纯文本后放入项目目录。获得内容后再执行内容映射与并发改写。

## 目标

将 `/Users/fufelix777/Desktop/dev/luweb` 的业务思想转译为 Sun-Shine.ai 自有叙事，形成一个面向消费品牌、跨境电商和企业管理者的 AI 增长基础设施官网。保留 Sun-Shine 的深海军蓝、金黄色、米白底色和清淡层次，但不复制 luweb 的原文、页面结构、动画、插图或案例表达。

## 新叙事

- 核心定位：Sun-Shine 是连接 AI 可见性、商品理解、增长执行与结果归因的智能增长基础设施。
- 客户价值：让产品被 AI 正确理解，让品牌进入智能消费决策链路，让增长动作形成可复用的闭环。
- 业务逻辑：诊断 → 建模 → 执行 → 验证 → 复利。
- 内容语气：中文为主、必要的英文产品名保留；专业、清晰、结果导向，避免“AI 万能化”表述。

## 视觉与交互决策

- 维持 Sun-Shine.ai 的米白背景、海军蓝文字、金色 CTA 与蓝金双色视觉识别。
- 重做 Hero：以“增长信号流”作为自有 SVG 动画，不沿用 luweb 的粒子场或原 SVG。
- 增加一个轻量 CSS/Canvas 3D 感的“增长轨道”视觉，不引入依赖；在低动效设置下自动静止。
- 业务流程采用可滚动的 5 步流程带；产品采用分层卡片与可展开细节，减少信息堆叠。
- 图片素材使用新生成的抽象业务图形和数据纹理，不复用 luweb 的客户 logo、案例图和插画。

## 并发执行切片

### Slice A：内容模型与文案

- [ ] 建立 Sun-Shine 自有业务板块：AI Visibility、Commerce Intelligence、Growth Operations、Outcome Intelligence。
- [ ] 建立 5 步业务流程和每个产品模块的独立介绍。
- [ ] 编写重构后的首页文案、FAQ、CTA 和可信度说明。

### Slice B：视觉资产

- [ ] 重做 Hero 的 SVG 信号流动画。
- [ ] 重做业务板块图形、流程节点和产品图标系统。
- [ ] 生成一套不依赖外部图片的抽象视觉资产，支持响应式和 reduced-motion。

### Slice C：页面实现

- [ ] 重构单页信息架构、导航和移动端交互。
- [ ] 将业务板块、流程、产品、行业、案例方法、FAQ、CTA 集成到页面。
- [ ] 维持 `sunshine.ai` 标题、favicon 和现有品牌资产。

## 验收标准

- [ ] 页面不出现 luweb 的品牌名、原始口号、原始客户 logo 或原始案例文案。
- [ ] 首页清晰回答：Sun-Shine 是什么、解决什么问题、如何工作、有哪些产品、客户如何开始。
- [ ] 业务板块不少于 4 个；流程为 5 个可理解步骤；产品模块均有独立定位、输入、动作和输出。
- [ ] 新 SVG/视觉动画和原有 Sun-Shine VI 一致，并支持 `prefers-reduced-motion`。
- [ ] 320px、768px、1024px、1440px 下无横向溢出和不可用 CTA。
- [ ] 完成静态检查、HTML 解析检查和浏览器验收后，再决定是否部署 Production。

---

# Sun-Shine 官网主题改版历史计划

## 目标

参考 `outcome.leapunion.ai/intro` 的清淡、内容优先风格，保留 Sun-Shine Logo 的深海军蓝与金黄色作为品牌强调色，提升导航、区块和卡片的页面层次。

## 设计决策

- 使用米白/浅灰背景与浅绿色区块渐变，避免整页深色背景。
- 深海军蓝用于标题、正文和核心文字；金黄色用于 CTA、徽章、重点数字和交互强调。
- 导航采用半透明吸顶、细边框、胶囊菜单，并在窄屏保持可横向滚动。
- 卡片使用白底、细边框、轻阴影和有限圆角，建立信息层级而非堆叠强光效。
- 保留现有文案、锚点、表单提示和 Logo 资源，不引入新依赖。

## 执行任务

1. 并发审查现有 HTML 结构、颜色类、导航和响应式断点。
2. 重构视觉 token 与深色样式覆盖为清淡主题。
3. 增强导航层次、移动端菜单可见性和按钮状态。
4. 调整 Hero、区块、卡片、表单与页脚的背景/边框/阴影层级。
5. 做静态检查，确认标题、Logo、锚点和脚本未回归。

## 验收标准

- 页面主背景为清淡色，区块之间有明显但克制的层次。
- 导航在桌面端呈胶囊菜单，在移动端不溢出并可横向浏览。
- Sun-Shine Logo 的蓝金色仍是主要品牌强调色。
- 现有 `#vision`、`#architecture`、`#assets`、`#services`、`#cases`、`#contact` 锚点继续可用。
- 生产部署前完成本地静态验证。
