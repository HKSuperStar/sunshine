# Sun-Shine AI 官网内容重构

## 战略文档驱动的官网升级（2026-08-25）

- [x] 建立 git 基线快照（此前目录无版本控制）
- [x] Slice A：新增 `#business-model`、`#capabilities` 区块结构与渲染逻辑（index.html + sunshine-app.js，不碰 content.js）
- [x] Slice B：重写 `business[]`/`products.items`/`industries`/`faq`，新增 `businessModel{}`/`capabilities{}`（中文），统一 kicker 编号
- [x] Slice C：Slice B 完成后产出对应英文内容并合并
- [x] Checkpoint：静态构建通过；浏览器桌面视口 + 中英文切换验收通过，无 console 报错；移动视口未能在本环境可靠触发断点重渲染，但新区块复用了页面既有的、已验收过的响应式 grid class，风险低
- [x] Checkpoint：git commit 记录本轮改动

## 数据、研发与任务执行 Agent 集成

- [x] Slice A：建立数据洞察、研发协同、任务编排、质量交付四个 Agent 的双语数据
- [x] Slice B：新增与 Sun-Shine VI 一致的研发与任务执行工作台
- [x] Slice C：实现 tabs、语言同步、键盘状态和工具权限边界说明
- [ ] Checkpoint：四个 Agent、移动端和静态构建验收通过
- [ ] 真实研发/任务执行 API（`POST /api/delivery-agent`）另行设计，不在本轮伪造
- [x] 部署 Vercel Production 并确认状态为 Ready

## 经营与供应链 Agent 集成

- [x] Slice A：建立经营诊断、需求预测、采购补货、库存履约四个 Agent 的双语数据
- [x] Slice B：新增与 Sun-Shine VI 一致的经营与供应链工作台
- [x] Slice C：实现 tabs、语言同步、键盘状态和数据边界说明
- [ ] Checkpoint：四个 Agent、移动端和静态构建验收通过
- [ ] 真实经营/供应链 API（`POST /api/operations-agent`）另行设计，不在本轮伪造
- [x] 部署 Vercel Production 并确认状态为 Ready

## 客户与增长 Agent 集成

- [x] Slice A：将 `agents/growth` 的四个 Agent 转成官网双语内容模型
- [x] Slice B：新增与 Sun-Shine VI 一致的 Agent 工作台区块
- [x] Slice C：实现 tabs、键盘状态、语言同步和演示边界 CTA
- [ ] Checkpoint：四个 Agent、移动端和中英文切换验收通过
- [ ] 真实 Agent API（`POST /api/growth-agent`）另行设计，不在本轮伪造
- [x] 部署 Vercel Production 并确认状态为 Ready

## 中英文切换功能

- [x] Slice A：补充官网主要文案的中文/英文语言数据
- [x] Slice B：增加顶部右上角语言切换按钮与响应式样式
- [x] Slice C：实现整页渲染、`lang`、localStorage 持久化和无障碍状态
- [ ] Checkpoint：中英文切换、刷新保持、键盘操作通过（当前环境无可用浏览器）
- [ ] Checkpoint：构建和 320/768/1024/1440 浏览器验收通过（当前环境无可用浏览器）
- [x] 部署 Vercel Production 并确认状态为 Ready

## ChatGPT 会话驱动的二次内容升级

- [ ] 读取用户提供的 ChatGPT 会话并确认可用范围（当前阻塞：Web Cache miss，浏览器返回空白标签页）
- [ ] 并发审查现有官网结构、内容模型和视觉资产
- [ ] 建立会话观点到官网区块的改造映射
- [ ] 重写官网业务、产品、流程、FAQ 和 CTA 内容
- [ ] 完成静态构建与 320/768/1024/1440 浏览器验收
- [ ] 用户确认后部署 Production

### Checkpoint：内容来源可用性

- [ ] 会话内容已成功读取，或已获得用户提供的会话导出/正文
- [ ] 未将不可验证或敏感信息直接写入官网

- [x] Slice A：完成自有业务架构、流程、产品和 CTA 文案
- [x] Slice B：完成全新 SVG/视觉资产，不复用 luweb 素材
- [x] Slice C：完成单页整合与响应式交互
- [x] Checkpoint：验证主要锚点、移动端菜单、脚本语法和无 luweb 原文残留
- [x] Checkpoint：使用真实浏览器完成 320/768/1024/1440 视口验收
- [x] Checkpoint：完成静态文件、脚本和 SVG 结构验证
- [x] 处理 Tailwind CDN 的生产环境警告（改为本地构建）
- [x] Checkpoint：本地 CSS 构建、真实浏览器和表单交互回归通过
- [x] 部署 Production 并确认 Vercel 状态为 Ready

## 历史主题改版

- [x] 研究参考页面主题和布局
- [x] 并发检查现有页面结构、样式和响应式问题
- [x] 实施清淡背景与页面层次改版
- [x] 增强桌面/移动端导航菜单
- [x] 完成静态验证
- [x] 部署 Production 并确认 Vercel 状态为 Ready
