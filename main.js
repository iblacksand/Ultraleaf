const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let windows= [];
let windowcount = 0;

global.createOverleaf = function(){
  win = new BrowserWindow({width: 800, height: 600});
  windows.push(win);
  windowcount++;
  // and load the index.html of the app.
  win.loadURL("https://www.overleaf.com");

  // Open the DevTools.
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    let index = windows.indexOf(win);
    if(index > -1) windows.splice(index, 1);
    windowcount--;
  });
}


global.createWindow = function(urlpath) {
  // Create the browser window.
  let win;
  //console.log(urlpath);
  win = new BrowserWindow({width: 800, height: 600});
  windows.push(win);
  windowcount++;
  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, urlpath),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    let index = windows.indexOf(win);
    if(index > -1) windows.splice(index, 1);
    windowcount--;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow('index.html')
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (windows[windowcount] === null) {
    createWindow(urload);
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.