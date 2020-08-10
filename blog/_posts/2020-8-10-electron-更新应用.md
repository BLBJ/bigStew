---
title: electron 更新应用
date: 2020-08-10
tags: 
  - electron
  - javascript
  
author: 丁文博
location: 北京 
---

### electron 版本更新实现

#### 引入模块 `electron-updater`
`import {autoUpdater} from 'electron-updater'`

#### 配置应用更新的地址 

 根据项目配置结构，找到配置地方，可在 `package.json` 里面或者 `vue.config.js`配置相关项,如下：

 这里选择`vue.config.js`

```javascript

 pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "publish": [
          {
            "provider": "generic",
             "url": "http://127.0.0.1/xxxx"  //更新包存放地址
          }
        ],
      }

      ...
    }
 }
```

#### 更新检测实现

主进程中代码实现如下：
```javascript
import { autoUpdater } from 'electron-updater'
const fs = require('fs-extra')


!function updateHandle() {
  const uploadUrl = "http://127.0.0.1/xxxxx/";

  // 更新前，删除本地安装包 ↓
  let updaterCacheDirName = 'cruise_user-updater'
  const updatePendingPath = path.join(autoUpdater.app.baseCachePath, updaterCacheDirName, 'pending')
  console.log(updatePendingPath)
  fs.emptyDir(updatePendingPath)
  // 更新前，删除本地安装包 ↑
  let message = {
    error: { type: 1, info: '检查更新出错' },
    checking: { type: 2, info: '正在检查更新……' },
    updateAva: { type: 3, info: '检测到新版本，正在下载……' },
    updateNotAva: { type: 4, info: '您当前使用的是最新版本' },
  };

  if (process.env.NODE_ENV === 'development') {
    autoUpdater.updateConfigPath = path.join(__dirname, 'win-unpacked/resources/app-update.yml')
    // mac的地址是'Contents/Resources/app-update.yml'
  }
  // 下载地址，不加后面的**.exe
  autoUpdater.setFeedURL(uploadUrl);
  autoUpdater.on('error', function (error) {
    console.log(error);
    sendUpdateMessage(message.error)
  });
  autoUpdater.on('checking-for-update', function () {
    console.log("检测版本信息");
    sendUpdateMessage(message.checking)
  });
  autoUpdater.on('update-available', function (info) {
    console.log("检测到新版本，正在下载:****");
    console.log(info);
    sendUpdateMessage(message.updateAva)
  });
  autoUpdater.on('update-not-available', function () {
    sendUpdateMessage(message.updateNotAva)
  });

  // 更新下载进度事件
  autoUpdater.on('download-progress', function (progressObj) {
    win.webContents.send('downloadProgress', progressObj)
  });
  autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {
    console.log(event);
    console.log(releaseNotes);
    console.log(releaseName);
    console.log(releaseDate);
    console.log(updateUrl);
    console.log(quitAndUpdate);
    ipcMain.on('isUpdateNow', (e, arg) => {
      console.log(e);
      console.log(arg);
      console.log(arguments);
      console.log("开始更新");
      //some code here to handle event
      autoUpdater.quitAndInstall();
    });

    win.webContents.send('isUpdateNow')
  });

  ipcMain.on("checkForUpdate", () => {
    //执行自动更新检查
    autoUpdater.checkForUpdates();
  })
}(win);

// 通过main进程发送事件给renderer进程，提示更新信息
function sendUpdateMessage(text) {
  win.webContents.send('message', text)
}

```

### 渲染进程中

render进程中可拿到更新信息，进行UI的交互操作，UI自己根据喜好实现

```javascript
 /**
     * 检查更新
     **/
    async checkUpdate() {
      this.updateDialogVisible = true;
      this.tips = {};
      this.downloadPercent = 0;
      const _this = this;
      _this.$electron.ipcRenderer.send("checkForUpdate");
      await _this.$electron.ipcRenderer.on("message", (event, text) => {
        console.log(text);
        _this.tips = text;
      });
      _this.$electron.ipcRenderer.on(
        "downloadProgress",
        (event, progressObj) => {
          _this.downloadPercent = progressObj.percent || 0;
        }
      );
      _this.$electron.ipcRenderer.on("isUpdateNow", () => {
        _this.$electron.ipcRenderer.send("isUpdateNow");
      });
    },
```


<Valine></Valine>