module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    logo: '/logo.png',
    // navbar: false,
    base:'/vuepress/',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'test', link: '/test/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    // sidebar: auto,
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}