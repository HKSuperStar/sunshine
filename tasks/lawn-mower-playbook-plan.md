# 自动割草机社媒内容营销 · 深度页（新建）

目标：在 Case 模块内**新建一页** `/cases/robot-lawn-mower/season-playbook/`（英文 `/en/cases/...`），承载自动割草机品类海外社媒内容营销的运营细节。

## 为什么是新建一页，而不是新增一条案例

`robot-lawn-mower` 案例条目已存在（`70b4988` 交付，本轮已完成插画重画与文案补缺）。**再加一条同品类案例就是内容重复**——这个站自己的 GEO 文章就在讲不要制造重复内容，列表里出现两条割草机案例会直接削弱 Case 模块。

但案例详情页只有三张卡片，这个品类真正吃功夫的东西——旺季与淡季各自排什么、长短视频与社群如何分工、素材从达人庭院还是车主庭院来、安装与建图两条内容线怎么拆、安全表述怎么过审、天气改期怎么兜——全被压在一格里，说不透。**这正是一页深度页该承载的内容**，它是案例的下一层，不是案例的复制。

## 架构

`cases[]` 里 `robot-lawn-mower` 这一条新增一个可选字段 `deepDive`：

```
deepDive: { slug, eyebrow, title, summary, sections: [[小标题, 正文], ...], linkLabel }
```

- `scripts/build-site.cjs` 在案例详情页循环里：若该案例有 `deepDive`，则额外注册路由 `cases/<slug>/<deepDive.slug>`，并在详情页的 `.actions` 里加一个入口按钮。
- 深度页正文复用已有的文章版式（`<article class="container article">` + `sections.map`），与 `blog/<slug>` 同一套渲染，**不新增样式**。
- 深度页**不需要插画**：`verify-site.cjs` 的「恰好一张 feature-image」断言只作用于顶层案例 slug 目录，深度页不在其列。

**为什么现有校验不会误伤**：`verify-site.cjs` 扫 `public/cases` 只取**顶层目录**作为案例 slug 集合，深度页嵌在 `cases/robot-lawn-mower/` 之下，不会被当成第六条案例；列表页链接正则 `href="/cases/([^"/]+)/"` 也匹配不到多一层的路径。导航高亮靠 `route.startsWith('cases/')`，自动成立。hreflang 由路由键推导，自动成对。

页面总数 32 → **34**。

## 内容边界（不放宽）

不编造客户品牌（以品类立题，不出现公司名、型号、商标）；**不编造任何数据指标**（不写播放量、粉丝数、互动率、完播率、转化率、GMV、百分比，正文不得出现阿拉伯数字指标）；不编造平台政策条款或审核结论——提到合规只写「需要过审」这一工作方式；不编造检测结论或安全认证。

**不得与案例详情页重复。** 详情页讲的是「有哪些约束、谁来协作、沉淀了什么」；深度页讲的是「具体怎么排、怎么拆、怎么兜」。写之前先读详情页现有三格，凡是那里已经说过的，这里只能展开到可执行层面，不能复述。

## 并发分轨

| 轨 | 范围 | 独占文件 |
| --- | --- | --- |
| A 深度页文案 | `robot-lawn-mower` 条目新增 `deepDive` 字段，中英各一份 | `site-content.js` |
| B 构建器支持 | 渲染深度页路由 + 详情页入口按钮 | `scripts/build-site.cjs` |
| C 校验收口 | 32 → 34；深度页须被其父案例页链接；深度页无 `undefined` | `scripts/verify-site.cjs` |

三轨文件互斥，均不运行 `npm run build`，集成构建由主线程统一执行。B 与 A 有字段契约依赖，契约已在上面写死，两轨按契约各自实现即可。

## 验收标准

- `npm run build` 无报错；`node scripts/verify-site.cjs` 通过（34 页）。
- `/cases/robot-lawn-mower/season-playbook/` 与英文版可访问、内容完整、无 `undefined`、单个 H1、hreflang 互指。
- 案例详情页出现进入深度页的入口；`/cases/` 列表页**仍为五张卡片**（深度页不得混入案例列表）。
- 深度页内容与详情页三格**不重复**，且无数字指标、无品牌名。
- 既有页面回归：除 `cases/robot-lawn-mower` 两页（新增入口按钮）外，其余页面逐字节不变。
- 本地 git commit；**不自动部署、不推送**。
