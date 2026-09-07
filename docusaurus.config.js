// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import fs from 'fs';
import path from 'path';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Koki Blog',
  tagline: '学习记录',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url: 'https://Koki-Niwa.github.io',
  baseUrl: '/',

  organizationName: 'Koki-Niwa',
  projectName: 'Koki-Niwa.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '中文',
        htmlLang: 'zh-CN',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Koki-Niwa/Koki-Niwa.github.io/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Koki-Niwa/Koki-Niwa.github.io/tree/main/',
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        language: ['zh', 'en'],
        indexBlog: true,
        indexPages: true,
        indexDocs: true,
      },
    ],
    // 私有内容：仅当 drafts 目录存在时加载（本地开发可见，构建时不存在则自动跳过）
    ...(fs.existsSync(path.resolve(__dirname, 'drafts'))
      ? [
          [
            '@docusaurus/plugin-content-docs',
            {
              id: 'drafts',
              path: 'drafts',
              routeBasePath: 'drafts',
              sidebarPath: './sidebarsDrafts.js',
              editUrl: undefined,
              showLastUpdateTime: false,
              showLastUpdateAuthor: false,
            },
          ],
        ]
      : []),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Koki Blog',
        logo: {
          alt: 'Koki Blog Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'agentSidebar',
            position: 'left',
            label: 'Agent',
          },
          {
            type: 'docSidebar',
            sidebarId: 'compilerSidebar',
            position: 'left',
            label: '编译器',
          },
          {
            type: 'docSidebar',
            sidebarId: 'aiinfraSidebar',
            position: 'left',
            label: 'AI Infra',
          },
          { to: '/blog', label: '博客', position: 'left' },
          // 私有笔记仅本地显示
          ...(fs.existsSync(path.resolve(__dirname, 'drafts'))
            ? [{ to: '/drafts/intro', label: '私有笔记', position: 'left' }]
            : []),
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Koki-Niwa/Koki-Niwa.github.io',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '内容',
            items: [
              { label: 'Agent', to: '/docs/agent/intro' },
              { label: '编译器', to: '/docs/compiler/intro' },
              { label: 'AI Infra', to: '/docs/ai-infra/intro' },
              { label: '博客', to: '/blog' },
            ],
          },
          {
            title: '链接',
            items: [
              { label: 'GitHub', href: 'https://github.com/Koki-Niwa' },
              { label: 'RSS', href: '/blog/rss.xml' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Koki Blog. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        defaultLanguage: 'javascript',
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
        ],
      },
    }),
};

export default config;
