module.exports = {
  theme: '@vuepress/blog',
  title: '丁文博',
  description: 'Just do it',
  themeConfig: {
    nav: [
      { text: '技术', link: '/' },
      { text: '生活随笔', link: '/essay/' },
      { text: '标签', link: '/tag/' },
      { text: '摄影', link: '/photography/' },
      { text: 'github', link: 'https://github.com/BLBJ' },
    ]
  },
  directories: [
    {
      id: 'post',
      dirname: '_posts',
      path: '/',
      // itemPermalink: '/posts/:year/:month/:day/:slug'
    },
    {
      id: 'essay',
      dirname: '_essays',
      path: '/essay/',
      title:'随笔',
      
      // itemPermalink: '/posts/:year/:month/:day/:slug'
    }
  ],
}