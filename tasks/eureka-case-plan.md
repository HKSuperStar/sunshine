# Eureka 智能扫地机器人社媒营销案例

目标：在成功案例（cases）模块新增一个独立案例页，收录 Eureka 智能扫地机器人的海外社媒营销案例，模块从"单案例硬编码页"升级为"列表 + 详情"结构（对齐现有 blog 模块的 `posts` 模式）。

## 架构决策

- `cases` 模块改为列表页 `/cases/`（案例卡片网格） + 每个案例独立详情页 `/cases/{slug}/`，中英文均支持，与 blog 的 `posts` → `blog/{slug}` 完全对齐。
- 案例内容数据新增到 `site-content.js` 的 `cases[]`（双语），不改动 `sunshine-content.js` 里旧的单案例 `caseStudies` 字段（保留给未被此构建流程使用的历史/遗留文件，不必迁移风险）。
- JoyLink 现有内容原样迁移为 `cases[0]`（slug: `joylink`），保留其展示视频。
- Eureka 案例作为 `cases[1]`（slug: `eureka`），不配视频，仅配一张与站内视觉语言一致的原生 SVG 插画（沿用 `page-heroes.cjs` 的行内 SVG + 品牌配色手法，而非外部图片生成，保证可复现、无外部依赖）。

## 并行任务

- 内容线程（fork）：撰写 Eureka 案例双语文案（标题、eyebrow、卡片摘要、正文描述、三张卡片：项目背景 / 内容与达人协作 / 业务结果），遵循站内既有口径（不编造数据、不承诺具体转化率或 GMV，聚焦能力与协作方式，参照 JoyLink 案例的克制表达）。
- 主线程：设计 Eureka 案例插画（行内 SVG，扫地机器人 + 社媒互动图标 + 品牌配色），并重构 `scripts/build-site.cjs` 与 `site-content.js` 完成列表/详情页架构、路由、导航态、hreflang。
- 收尾：合并内容与代码，更新 `scripts/verify-site.cjs` 页面总数断言（22 → 26），跑构建 + 校验 + 真实浏览器验收（中英文，列表页 + 两个详情页，导航高亮），本地 git commit（部署留待用户另行确认，与既往流程一致）。

## 验收标准

- `npm run build` 无报错；`node scripts/verify-site.cjs` 通过（含更新后的页面总数）。
- 浏览器验收：`/cases/` 与 `/en/cases/` 显示两张案例卡片并可跳转；`/cases/eureka/` 与 `/en/cases/eureka/` 内容完整、插画正常渲染；`/cases/joylink/` 保留原视频与内容；导航"成功案例/Case studies"在案例列表页与详情页均高亮。
- 文案不包含未经验证的具体数据指标。
- 提交 git commit，暂不自动部署生产。
