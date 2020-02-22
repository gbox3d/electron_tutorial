"use strict"

function renderMain({process}) {

    // console.log(process.version)
    document.getElementById("version").innerText = process.versions.electron
}

globalThis.renderMain = renderMain