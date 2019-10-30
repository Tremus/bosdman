const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
// electron.js is required in the /build folder, and copied in the build process
// The location '../src/' in the paths below are required to successfully import
const server = require('../src/createServer');
const { port } = require('../src/Config');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
server.listen(port, () => console.log(`ExpressJS running on https://localhost:8081`));

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 900,
        height: 680,
        icon: path.join(__dirname, '/public/static/img/icon.icns'),
    });
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '/index.html')}`);
    win.on('closed', () => (win = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
