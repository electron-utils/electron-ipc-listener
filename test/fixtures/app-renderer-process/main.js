const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    center: true,
    width: 800,
    height: 600
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('test:foobar');
    mainWindow.webContents.send('test:clear');
    mainWindow.webContents.send('test:foobar');
  });
});
