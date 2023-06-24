const { app, ipcMain, shell, BrowserWindow } = require('electron')
const { exec } = require('node:child_process')
const path = require('path')
const isDev = require('electron-is-dev')

// require('@electron/remote/main').initialize()

function createWindow() {
  // Create the browser window.
  

exec(`cd ${'django-app/venv/scripts'} && ${'activate'} && python ../../trackertest/manage.py runserver 8000`, (err, output) => {
  // once the command has completed, the callback function is called
  if (err) {
      // log and return if we encounter an error
      console.error("could not execute command: ", err)
      return
  }


})

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload:path.join(__dirname, "./preload.js")
    }
  })

  win.loadURL(
    isDev
      ? 'http://127.0.0.1:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

}

function createWindowSkype() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload:path.join(__dirname, "./preload.js")
    }
  })

  win.loadURL(
    'https://www.skype.com/en/'
  );

}

function createWindowGmail() {
  // Create the browser window.

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload:path.join(__dirname, "./preload.js")
    }
  })

  win.loadURL(
    'https://mail.google.com/mail/'
  );

}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

ipcMain.handle('loadGmail',()=>{
  createWindowGmail()
})

ipcMain.handle('loadSkype',()=>{
  createWindowSkype()
})

