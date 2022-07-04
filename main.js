const {app, BrowserWindow, ipcMain, dialog} = require('electron')
const path = require('path')

async function handleFileOpen() {
  const { event, command } = await dialog.showOpenDialog()
  return command
}

function createWindow () {
  const mainWindow = new BrowserWindow({
    height: 300,
    width: 300,
    frame: false,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('dialog:openFile', handleFileOpen)
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})