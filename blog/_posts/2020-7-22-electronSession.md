---
title: electron session设置
date: 2020-07-22
tags: 
  - electron
  
author: 丁文博
location: 北京 
comment: true
---


### cookie设置


#### render 渲染进程中（vue代码里）

```javascript
const { ipcRenderer } = require('electron');

//设置cookie
 ipcRenderer.send('setCookie',
    JSON.stringify(
        {
            "url":"调用API的域名 ps: http://www.airlook.com/ ",
            "key":"key值",
            "value":"value值"
         }));
         
//清除cookie
ipcRenderer.send('removeCookie',
    JSON.stringify(
        {
            "url":"调用API的域名 ps: http://www.airlook.com/ ",
            "key":"key值",
         }));
         
```

#### main-process主进程中（background.js）

```javascript

import { app, protocol, BrowserWindow, screen,ipcMain } from "electron";

// 设置一个 cookie，使用设置的名称；
// 如果存在，则会覆盖原先 cookie.
function setCookie(url,name,value){
  const cookie = { url, name, value }
  session.defaultSession.cookies.set(cookie)
  .then(() => {
    // success
    console.log(`cookie ${ name } 设置成功`)
  }, (error) => {
    console.error(error)
  })
}

//清除cookie
function removeCookie(url,name){
  session.defaultSession.cookies.remove(url,name)
}


ipcMain.on("setCookie", (event,msg) => {
console.log(msg)
  let {url,key,value } = JSON.parse(msg);
  setCookie(url,key,value);
});

ipcMain.on("removeCookie", (event,msg) => {
  let {url,key} =  JSON.parse(msg);
  removeCookie(url,key)
});
    
```

--------------------------------

<Valine></Valine>