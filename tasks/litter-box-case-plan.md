# 自动清洁猫砂盆社媒内容营销案例

目标：在成功案例（cases）模块新增第三个案例页，收录自动清洁猫砂盆品类的海外社媒内容营销案例。沿用 [Eureka 案例](eureka-case-plan.md) 已确立的「列表 + 详情」结构，不改架构，只增内容。

## 架构决策（沿用，不新建）

模块已是列表页 `/cases/` + 详情页 `/cases/{slug}/`，中英文各一套。本案例作为 `site-content.js` 中 `cases[]` 的第三条（`zh` 与 `en` 各加一条），slug 为 `smart-litter-box`。不动 `sunshine-content.js` 的历史字段。

不配视频，仅配一张原生行内 SVG 插画，由 `scripts/case-art.cjs` 按 slug 提供——沿用既有做法：无外部图片依赖、可复现。调色沿用站内视觉语言：藏青 `#122c3a`、金 `#b58a39` / `#e9c982`、雾白 `#f2f5ed`、次级蓝 `#3a5566`，1600×900 viewBox，虚线放射环 + 扁平线稿图标。

页面总数由 26 增至 **28**（`(8 页 + 3 案例 + 3 文章) × 2 语言`），`scripts/verify-site.cjs` 第 6 行断言须同步。

## 内容边界

**不编造客户品牌。** 现有两例（JoyLink、Eureka）均为真实客户。本轮未提供品牌名，因此案例以**产品品类**立题（自动清洁猫砂盆 / Self-cleaning cat litter box），标题与正文不出现任何具体公司名。若后续确认真实品牌，再整体替换标题与 slug。

**不编造数据指标。** 与 Eureka 案例同一口径：不写转化率、GMV、粉丝增长数、ROI 或任何未经核实的数字；聚焦**能力与协作方式**，而非结果量化。措辞克制，参照 JoyLink 与 Eureka 两例的既有表达。

**品类特有的真实约束要体现**，这是本案例区别于扫地机器人的地方：宠物类目内容高度依赖真实养宠场景与用户生成内容；平台对宠物用品的健康类表述有合规边界；产品体验周期长（需连续使用数周才有说服力），达人合作节奏与 3C 快消不同。这些是品类事实，不是业绩承诺，可以写。

## 并发分轨

| 轨 | 范围 | 独占文件 |
| --- | --- | --- |
| A 双语文案 | `cases[]` 第三条，中英各一份：title / eyebrow / summary / description / sectionTitle / imageAlt / items（三张卡：项目背景、内容与达人协作、业务结果） | `site-content.js` |
| B 插画 | `smart-litter-box` 的行内 SVG，品牌配色，与 eureka 同构不同形 | `scripts/case-art.cjs` |
| C 校验收口 | 页面总数断言 26 → 28 及其说明文案 | `scripts/verify-site.cjs` |

三轨文件互斥。各轨均不运行 `npm run build`（会互相覆盖 `public/`），集成构建由主线程统一执行。

## 验收标准

- `npm run build` 无报错；`node scripts/verify-site.cjs` 通过（28 页）。
- `/cases/` 与 `/en/cases/` 显示三张案例卡片，新卡片可跳转。
- `/cases/smart-litter-box/` 与 `/en/cases/smart-litter-box/` 内容完整、SVG 正常渲染、`imageAlt` 有意义。
- 导航「成功案例 / Case studies」在新详情页高亮。
- 既有两个案例页与文章页不受影响。
- 全文无具体数据指标，无虚构公司名。
- 本地 git commit；**不自动部署生产**，与既往流程一致。
