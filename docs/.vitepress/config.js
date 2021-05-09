// @ts-check
const pkg = require('../../package.json')

const Guide = [
  {
    text: 'Getting Started',
    link: '/guide/',
  }
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
  title: 'Vitepress Template',
  description: pkg.description,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Seonglae Cho' }],
    ['meta', { property: 'og:title', content: 'Vitepress' }],
    ['meta', { property: 'og:image', content: `${pkg.homepage}/og-image.png` }],
    ['meta', { property: 'og:description', content: pkg.description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@SeonglaeC' }],
    ['meta', { name: 'twitter:image', content: `${pkg.homepage}/og-image.png` }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'seonglae/vitepress-template',
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'release',
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
      '/': slidebars,
    },
  },
}
