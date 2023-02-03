// Modules to control application life and create native browser window
const {app, BrowserWindow , ipcMain} = require('electron')
const path = require('path')
const fs = require('fs')

const {SerialPort,ReadlineParser} = require('serialport');
// const Readline = require('@serialport/parser-readline')



// const { contextBridge, ipcRenderer } = require('electron')
// serialport.list();

console.log('start serial example 2023')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // nodeIntegration: true,
      preload: path.join(__dirname, './preload.js')
    }
  });

  //ipcMain 예제 참고
  //https://tinydew4.github.io/electron-ko/docs/api/ipc-main/

  ipcMain.on('message', (event, arg) => {
    console.log(arg) // prints "ping"
    event.reply('message-reply', `u say ${arg}`)
  });

  ipcMain.on('get-serialport-list', async (event, arg) => {
    const list = await SerialPort.list()
    console.log(list)
    event.reply('get-serialport-list-reply', list)
  });

  let port = null;
  ipcMain.on('connect_sp', async (event, arg) => {
    port = new SerialPort( { path : arg.path, baudRate: arg.baudRate })
    const parser = new ReadlineParser({ delimiter: '\r\n'})
    port.pipe(parser)
    port.on('open', () => {
      console.log('serial port open')
    });

    port.on('close', () => {
      console.log('serial port close')
    });
    
    parser.on('data', (data) => {
      console.log(data)
      event.reply('serialport-data', data)
    });
    
  });

  ipcMain.on('disconnect_sp', async (event, arg) => {
    console.log('disconnect_sp')

    if(port) {
      port.close();
    }

  });

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Make the following changes in main.js
app.whenReady(() => {
  app.allowRendererProcessReuse = false
})