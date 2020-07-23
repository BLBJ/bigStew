
module.exports = {
  theme: require.resolve('./theme/'), // 使用自定义主题
  title: "wbding",
  description: "博客 技术 文章",
  themeConfig: {
    nav: [
      { text: "前端", link: "/post/" },
      { text: "随笔", link: "/writing/" },
      { text: "类别", link: "/tag/" },
      { text:"github",link:"https://github.com/BLBJ"}
    ],
    directories: [
      { // 主页配置，自定义主题就是为了这
        id: 'home',
        dirname: '_posts',
        path: '/',
        layout: 'IndexHome' // 自定义首页布局组件
      },
      {
        id: 'post',
        dirname: '_posts',
        path: '/post/',
        itemPermalink: '/posts/:year/:month/:day/:slug'
      },
      {
        id: "writing",
        dirname: "_writing",
        path: "/writing/",
        itemPermalink: '/posts/:year/:month/:day/:slug'
      },
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/BLBJ",
        },
        {
          type:"mail",
          link:"/contact/"
        }
      ],
      copyright: [
        {
          text: "MIT Licensed | Copyright © 2018-present wbding.com",
          link: "",
        },
      ],
    },
  },
};
