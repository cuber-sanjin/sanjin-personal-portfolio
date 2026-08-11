# 叁金个人作品集

这是叁金的个人作品集网站，记录可运行的 Web 应用、Java 后端、AI 应用、数据分析与交互实验。站点使用 Next.js App Router 构建，项目详情以 MDX 维护，截图和静态资源统一放在 `public/` 中。

## 内容概览

- 企业礼赠采购平台：Spring Boot、MyBatis、Redis、Spring AI、pgvector 与 Vue 运营后台。
- 叁金销售数据分析 Agent：Spring Boot、LangChain4j、SSE、Vue、Pinia 与 ECharts。
- 微博舆情分析、微信小程序、PWA、网页游戏和 Java Web 课程项目。

## 本地运行

```bash
npm ci
npm run dev
```

打开 <http://localhost:3000> 查看站点。生产构建使用：

```bash
npm run build
```

## 发布

推送到 `main` 后，GitHub Actions 会自动构建并部署到 GitHub Pages。仓库只包含个人作品集站点与展示素材，不包含 AegisGift 或叁金销售 Agent 的源码。
