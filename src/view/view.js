const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

function crearVentana() {
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, "renderer.js"),
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
}

function renderView() {
  app.whenReady().then(() => {
    crearVentana();

    // IPC para seleccionar archivo
    ipcMain.handle("select-file", async () => {
      const result = await dialog.showOpenDialog({
        filters: [{ name: "Text Files", extensions: ["txt"] }],
        properties: ["openFile"],
      });

      if (!result.canceled && result.filePaths.length > 0) {
        const content = fs.readFileSync(result.filePaths[0], "utf8");
        return { path: result.filePaths[0], content };
      }
      return null;
    });
  });
}

module.exports = { renderView };
