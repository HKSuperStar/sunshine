# Sun-Shine.ai 官网

双语静态多页面官网。主导航：关于 SunShine、产品、成功案例、博客、FAQ、联系我们。

## 开发与构建

```sh
npm install
npm run build
python3 -m http.server 4173 --directory public
```

生产入口为构建生成的 `public/index.html`。`public/` 不提交，由 Vercel 构建生成；根目录旧 `index.html` 和 `sunshine-app.js` 为原单页版本保留资料，不再是生产入口。

- `scripts/build-site.cjs`：公共页面模板、静态路由及资源复制。
- `site-content.js`：中英文公司介绍与原创博客内容。
- `sunshine-content.js`：复用现有产品、案例、FAQ、行业和品牌内容。
- `src/site.css`：多页面响应式样式。
- `site.js`：移动菜单、语言偏好和联系需求复制。

中文路由 `/about/`、`/products/`、`/cases/`、`/blog/`、`/faq/`、`/contact/`；英文在 `/en/` 下镜像。博客详情在 `/blog/<slug>/`。

## 验证

`node scripts/verify-site.cjs` 检查生成页面、导航与本地资源。

启动预览服务后，安装了 Playwright 和 Chrome 的环境可以运行 `node scripts/verify-browser.cjs`；也可用 `SUNSHINE_PLAYWRIGHT` 指定已有 Playwright 模块位置。

## 发布与内容边界

Vercel 项目为 `leapunion/sunshine`，构建命令 `npm run build`，输出目录 `public`。生产发布：`vercel --prod --yes --scope leapunion`。

公司组织区块展示业务协作架构；公司历史采用战略发展路线，未填写未经确认的人员和年份。联系页生成可复制需求说明，不连接收件服务、不声称消息已发送；正式联系渠道待公司提供后接入。
