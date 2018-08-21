const { app, BrowserWindow, shell, ipcMain, Menu } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

// const { TouchBarButton, TouchBarLabel, TouchBarSpacer } = TouchBar

let mainWindow

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    // backgroundColor: '#F7F7F7',
    // minWidth: 880,
    // show: false,
    // titleBarStyle: 'hidden',
    // webPreferences: {
    //   nodeIntegration: false,
    //   preload: __dirname + '/preload.js',
    // },
    height: 860,
    width: 1280,
  })

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )

  if (isDev) {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS,
    } = require('electron-devtools-installer')

    await installExtension(REACT_DEVELOPER_TOOLS)
    await installExtension(REDUX_DEVTOOLS)
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// mainWindow.once('ready-to-show', () => {
//   mainWindow.show()

//   ipcMain.on('open-external-window', (event, arg) => {
//     shell.openExternal(arg)
//   })
// })
// }

// const generateMenu = () => {
//   const template = [
//     {
//       label: 'File',
//       submenu: [{ role: 'about' }, { role: 'quit' }],
//     },
//     {
//       label: 'Edit',
//       submenu: [
//         { role: 'undo' },
//         { role: 'redo' },
//         { type: 'separator' },
//         { role: 'cut' },
//         { role: 'copy' },
//         { role: 'paste' },
//         { role: 'pasteandmatchstyle' },
//         { role: 'delete' },
//         { role: 'selectall' },
//       ],
//     },
//     {
//       label: 'View',
//       submenu: [
//         { role: 'reload' },
//         { role: 'forcereload' },
//         { role: 'toggledevtools' },
//         { type: 'separator' },
//         { role: 'resetzoom' },
//         { role: 'zoomin' },
//         { role: 'zoomout' },
//         { type: 'separator' },
//         { role: 'togglefullscreen' },
//       ],
//     },
//     {
//       role: 'window',
//       submenu: [{ role: 'minimize' }, { role: 'close' }],
//     },
//     {
//       role: 'help',
//       submenu: [
//         {
//           click() {
//             require('electron').shell.openExternal('https://getstream.io/winds')
//           },
//           label: 'Learn More',
//         },
//         {
//           click() {
//             require('electron').shell.openExternal(
//               'https://github.com/GetStream/Winds/issues'
//             )
//           },
//           label: 'File Issue on GitHub',
//         },
//       ],
//     },
//   ]

//   Menu.setApplicationMenu(Menu.buildFromTemplate(template))
// }

// app.on('ready', () => {
//   createWindow()
//   generateMenu()
// })

// app.on('window-all-closed', () => {
//   app.quit()
// })

// app.on('activate', () => {
//   if (mainWindow === null) {
//     createWindow()
//   }
// })

// ipcMain.on('load-page', (event, arg) => {
//   mainWindow.loadURL(arg)
// })
