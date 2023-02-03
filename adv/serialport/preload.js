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


document.addEventListener('DOMContentLoaded', async () => {

    const portListElement = document.querySelector('#portList')
    const selectPortElement = document.querySelector('#selectPort')

    ipcRenderer.on('get-serialport-list-reply', (event, arg) => {
        console.log(arg)

        const _ul = portListElement

        arg.forEach((port) => {
            const _li = document.createElement('li')
            _li.innerHTML = port.path
            _li.setAttribute('data-path', port.path)
            _ul.appendChild(_li)
        });
    });
    ipcRenderer.send('get-serialport-list')


    ipcRenderer.on('serialport-data', (event, arg) => {
        // let _data = new TextDecoder().decode(arg);
        let _data = arg;
        console.log(_data)
    });

    document.querySelector('#connect').addEventListener('click', () => {

        console.log('connect')
        ipcRenderer.send('connect_sp', { path: '/dev/tty.usbserial-1130', baudRate: 115200 })
    });

    document.querySelector('#disconnect').addEventListener('click', () => {

        console.log('disconnect')
        ipcRenderer.send('disconnect_sp')
    });

    portListElement.addEventListener('click', (evt) => {
        console.log(evt.target.dataset.path)
        selectPortElement.innerHTML = evt.target.dataset.path
    });

});




// /dev/tty.usbserial-1130
//ipcRenderer.send('connect_sp', {path : '/dev/tty.usbserial-1130', baudRate : 115200})


console.log('preload.js');