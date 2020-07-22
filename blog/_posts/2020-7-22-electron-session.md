---
title: electron session设置
date: 2020-07-22
tags: 
  - electron
  - javascript
  - vue
author: 丁文博
location: 北京 
---

###  file形式 加载页面文件

```javascript
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win_small.webContents.openDevTools();
  } else {
    // win.loadURL('app://./index.html');
    win.loadURL(`file://${__dirname}/index.html`)  //此处改为file加载
  }
```

--------------------------------



