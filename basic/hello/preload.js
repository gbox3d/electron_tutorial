
// const path = require('path')
// const url = require('url')

const { contextBridge } = require('electron')

const fs = require('fs')

// const {fs} = require('serialport')
const renderMain = require('./renderer')


window.addEventListener('DOMContentLoaded', () => {
  

  console.log(fs)
  console.log('start preload... ', document.body.dataset.appname)
  // console.log('call render module')

  renderMain(fs);
})
