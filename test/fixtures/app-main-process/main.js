const {app, BrowserWindow} = require('electron');
const IpcListener = require('../../../index.js');

global.ipcCalls = [];
let mainWindow = null;

app.on('ready', function () {
  let ipcListener = new IpcListener();

  ipcListener.on('test:foobar', () => {
    global.ipcCalls.push('test:foobar');
  });

  ipcListener.on('test:clear', () => {
    global.ipcCalls.push('test:clear');
    ipcListener.clear();
  });

  mainWindow = new BrowserWindow({
    center: true,
    width: 800,
    height: 600
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
