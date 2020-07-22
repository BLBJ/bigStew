module.exports = {
  theme: "@vuepress/blog",
  title: "丁文博",
  description: "Just do it",
  themeConfig: {
    nav: [
      { text: "前端", link: "/post/" },
      { text: "随笔", link: "/writing/" },
      { text: "类别", link: "/tag/" },
      { text:"github",link:"https://github.com/BLBJ"}
    ],
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/post/',
      },
      {
        id: "writing",
        dirname: "_writing",
        path: "/writing/",
        // itemPermalink: '/posts/:year/:month/:day/:slug'
      },
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/BLBJ",
        }
      ],
      copyright: [
        {
          text: "Copyright © 2018-present wbding",
          link: "",
        },
      ],
    },
  },
};
