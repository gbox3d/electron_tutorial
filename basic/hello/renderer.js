
function renderMain(fs) {

    console.log('renderer.js loaded')

    setTimeout(() => {

        document.getElementById('node-version').innerText = process.versions.node
        document.getElementById('chrome-version').innerText = process.versions.chrome
        document.getElementById('electron-version').innerText = process.versions.electron;

        document.getElementById('hello-msg').innerText = "render loop connect success";
        document.getElementById('hello-msg').style.color = 'red'

        // console.log('fs', fs)

        const _list = fs.readdirSync('./')

        console.log(_list)

        document.getElementById('fileList').innerText = _list.join('\n')



    }, 1000)

    // document.getElementById('btn-fs-exam').addEventListener('click',()=> {
    //     location.href = '../file_exam/index.html'
    // });
}

// export default renderMain

// globalThis.renderMain = renderMain

module.exports = renderMain