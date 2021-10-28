var fs = require("fs");
const electron = require("electron").remote;
const dialog = electron.dialog;

// Open theme
module.exports = {
  openTheme: function () {
    const files = dialog.showOpenDialog(mainWindow, {
      properties: ["openTheme"],
      filters: [{ name: "Theme", extensions: ["themeConfig.json"] }],
    });

    if (!files) return;
  },
};
