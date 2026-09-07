# Koki Blog

个人技术学习记录网站，基于 [Docusaurus 3.x](https://docusaurus.io/) 构建。

- 文档 + 博客混合模式
- 中英文双语切换
- 本地离线全文搜索
- Giscus 评论系统
- 私有笔记（仅本地可见）
- GitHub Pages 自动部署

## 快速开始

```bash
# 安装依赖
npm install

# 启动本地开发服务器（http://localhost:3000）
npm start

# 生产构建
npm run build

# 本地预览构建产物
npm run serve
```

## 目录结构

```
Koki-Niwa.github.io/
├── blog/                    # 博客文章（按日期命名）
│   ├── authors.yml          # 作者信息
│   └── 2026-09-07-xxx.md
├── docs/                    # 文档（系统性知识）
│   ├── frontend/            # 前端开发
│   ├── backend/             # 后端开发
│   └── tools/               # 工具与效率
├── drafts/                  # 私有笔记（.gitignore，仅本地可见）
├── i18n/                    # 多语言翻译
│   └── en/                  # 英文翻译
├── src/
│   ├── components/          # 自定义组件
│   ├── css/custom.css       # 自定义样式
│   ├── pages/               # 自定义页面（首页等）
│   └── theme/               # 主题覆盖（评论注入等）
├── static/                  # 静态资源（图片、logo、favicon）
├── .github/workflows/       # GitHub Actions 自动部署
├── docusaurus.config.js     # 站点主配置
├── sidebars.js              # 文档侧边栏配置
└── sidebarsDrafts.js        # 私有笔记侧边栏配置
```

## 如何写内容

### 写文档（Docs）

在 `docs/` 对应分类目录下创建 `.md` 文件：

```markdown
---
sidebar_position: 2
title: 文章标题
---

# 文章标题

正文内容...
```

- `sidebar_position` 控制侧边栏排序
- 新文件会自动出现在对应分类的侧边栏中

### 写博客（Blog）

在 `blog/` 目录下创建 `YYYY-MM-DD-slug.md` 文件：

```markdown
---
slug: my-post-slug
title: 博客标题
date: 2026-09-07
authors: [Koki]
tags: [标签1, 标签2]
excerpt: 显示在博客列表页的摘要内容。
---

正文内容...
```

- `excerpt` 是列表页显示的摘要
- `tags` 会自动生成标签页

### 写私有笔记（Drafts）

在 `drafts/` 目录下创建 `.md` 文件。这些内容：
- 仅在本地 `npm start` 时可见（导航栏出现"私有笔记"入口）
- 不会提交到 Git（已加入 `.gitignore`）
- 不会出现在公开网站上

## 双语使用

默认语言为中文，导航栏右侧可切换英文。

### 翻译文档

在 `i18n/en/docusaurus-plugin-content-docs/current/` 下创建对应路径的英文翻译文件。例如翻译 `docs/frontend/intro.md`，则创建 `i18n/en/docusaurus-plugin-content-docs/current/frontend/intro.md`。

未翻译的页面会自动回退到中文版本。

## 部署到 GitHub Pages

已配置 GitHub Actions 自动部署，推送到 `main` 分支即自动构建上线。

### 首次部署步骤

1. 在 GitHub 创建仓库 `Koki-Niwa.github.io`（公开仓库）
2. 推送代码：
   ```bash
   git remote add origin https://github.com/Koki-Niwa/Koki-Niwa.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. 进入 GitHub 仓库 → Settings → Pages
4. Source 选择 **GitHub Actions**
5. 等待 Actions 运行完成（约 1-2 分钟），访问 https://Koki-Niwa.github.io

## 配置 Giscus 评论

评论功能需要手动配置一次：

1. 确保仓库已开启 **Discussions**（Settings → General → Features → 勾选 Discussions）
2. 访问 https://giscus.app
3. 填写仓库名 `Koki-Niwa.github.io`
4. 选择 Discussion 分类（建议 Announcements）
5. 复制生成的 `data-repo-id` 和 `data-category-id`
6. 编辑 `src/components/GiscusComponent.jsx`，填入：
   ```js
   repoId: '你的 repoId',
   categoryId: '你的 categoryId',
   ```
7. 提交推送，评论即生效

## 自定义

### 修改配色

编辑 `src/css/custom.css` 中的 `--ifm-color-primary` 等 CSS 变量。

### 修改首页

编辑 `src/pages/index.js`（Hero 区）和 `src/components/HomepageFeatures/index.js`（功能卡片）。

### 修改导航栏/页脚

编辑 `docusaurus.config.js` 中的 `navbar` 和 `footer` 配置。

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm start` | 启动开发服务器 |
| `npm run build` | 生产构建 |
| `npm run serve` | 预览构建产物 |
| `npm run clear` | 清除缓存（遇到奇怪问题时用） |
