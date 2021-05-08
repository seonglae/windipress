// @ts-check

const Guide = [
  {
    text: 'Why Slidev',
    link: '/guide/why',
  },
  {
    text: 'Getting Started',
    link: '/guide/',
  },
  {
    text: 'Installation',
    link: '/guide/install',
  },
  {
    text: 'Markdown Syntax',
    link: '/guide/syntax',
  },
  {
    text: 'Animations',
    link: '/guide/animations',
  },
  {
    text: 'Exporting',
    link: '/guide/exporting',
  },
  {
    text: 'Record Presentation',
    link: '/guide/recording',
  },
  {
    text: 'Presenter Mode',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Editor Integrations',
    link: '/guide/editors',
  },
]

const slidebars = [
  {
    text: 'Guide',
    children: Guide,
  }
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Slidev',
  description: 'Presentation slides for developers',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Presentation slides for developers' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'slidevjs/slidev',
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',

    nav: [
      {
        text: 'Guide',
        items: Guide,
      },
      { text: 'Showcases', link: '/showcases' },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/': slidebars,
    },
  },
}
