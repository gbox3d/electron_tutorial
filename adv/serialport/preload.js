const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    // get_sp : () => ipcRenderer.invoke('get_sp'),
    // connect_sp : () => ipcRenderer.invoke('connect_sp'),
    // ping : () => ipcRenderer.invoke('ping')


    // ping: () => ipcRenderer.invoke('ping'),
    // we can also expose variables, not just functions
})

ipcRenderer.on('message-reply', (event, arg) => {
    console.log(arg) // prints "pong"
});

ipcRenderer.send('message', 'ping')


document.addEventListener('DOMContentLoaded', () => {

    ipcRenderer.on('get-serialport-list-reply', (event, arg) => {
        console.log(arg) 

        const _ul = document.querySelector('#portList')

        arg.forEach((port) => {
            const _li = document.createElement('li')
            _li.innerHTML = port.path
            _ul.appendChild(_li)
        });
    });
    ipcRenderer.send('get-serialport-list')



});


console.log('preload.js');