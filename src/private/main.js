// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const log = require("electron-log");
const { autoUpdater } = require("electron-updater");
// const rpc = require("discord-rich-presence")("881991336818008124");
// const package = require("../../package.json");
const checkInternetConnected = require("check-internet-connected");

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";
log.info("App starting...");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 650,
    minWidth: 900,
    minHeight: 650,
    icon: "profiler.png",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
      nativeWindowOpen: true,
      enableRemoteModule: true,
      sandbox: false,
      nodeIntegrationInSubFrames: true, //for subContent nodeIntegration Enable
      webviewTag: true, //for webView
    },
    // frame: false,
  });

  // and load the index.html of the app.
  checkInternetConnected()
    .then(() => {
      mainWindow.loadFile("src/view/index.html");
    })
    .catch((err) => {
      mainWindow.loadFile("src/view/not-connected.html");
    });

  // mainWindow.loadFile("src/view/index.html");
  // mainWindow.setMenu(null);

  // const template = [
  //   // { role: 'fileMenu' }
  //   {
  //     label: "File",
  //     submenu: [
  //       {
  //         label: "Create new theme",
  //         accelerator: "CmdorCtrl+M",
  //         click: async () => {
  //           createTheme("test");
  //         },
  //       },
  //       {
  //         label: "Open theme",
  //         accelerator: "CmdorCtrl+O",
  //         click: async () => {
  //           // Open theme
  //           module.exports = {
  //             openTheme: function () {
  //               const files = dialog.showOpenDialog(mainWindow, {
  //                 properties: ["openTheme"],
  //                 filters: [
  //                   { name: "Theme", extensions: ["themeConfig.json"] },
  //                 ],
  //               });

  //               if (!files) return;
  //             },
  //           };
  //         },
  //       },
  //     ],
  //   },
  //   // { role: 'helpMenu' }
  //   {
  //     label: "Help",
  //     submenu: [
  //       {
  //         label: "Get help",
  //         click: async () => {
  //           const { shell } = require("electron");
  //           await shell.openExternal("https://designer.omg.lol/help");
  //         },
  //       },
  //     ],
  //   },
  //   // { role: 'creditsMenu' }
  //   {
  //     label: "Credits",
  //     submenu: [
  //       {
  //         label: "Themes@OMG.LOL",
  //         click: async () => {
  //           const { shell } = require("electron");
  //           await shell.openExternal("https://themes.omg.lol");
  //         },
  //       },
  //       {
  //         label: "MatseVH",
  //         click: async () => {
  //           const { shell } = require("electron");
  //           await shell.openExternal("https://matsevh.eu");
  //         },
  //       },
  //     ],
  //   },
  // ];
  // const menu = Menu.buildFromTemplate(template);
  // mainWindow.setMenu(menu);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  //check for updates every minute

  autoUpdater.checkForUpdatesAndNotify(); //no need for quitAndInstall => https://github.com/electron-userland/electron-builder/issues/2977#issuecomment-397887981

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function createTheme(name) {
  let configsettings = {
    break: "output.innerHTM",
    alwaysonoff: "toggleoutput.innerHTML",
  };

  let settings_data = JSON.stringify(configsettings, null, 2);

  const fs = require("fs");

  fs.writeFileSync("../themes/" + name + ".themeConfig.json", settings_data);
  fs.writeFile(
    "../themes/" + name + ".themeConfig.json",
    settings_data,
    function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    }
  );
}

// function setPresence(details, state) {
//   rpc.updatePresence({
//     details: details,
//     state: state,
//     largeImageKey: "profiler",
//     largeImageText: "Profiler",
//     smallImageKey: "icon",
//     smallImageText: "Made for OMG.LOL",
//     instance: 0,
//   });
// }

// setPresence("OMG.LOL Profile designer", "v" + package.version);
