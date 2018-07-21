console.log('hello');

var serialport = require('serialport');

console.log(serialport);

serialport.list(function (err, ports) {
    ports.forEach(function(port) {
  
      console.log(port);

      let _li = document.createElement('li');
      _li.innerText = port.comName;

      document.querySelector('#portList').appendChild(_li);

    });
  });