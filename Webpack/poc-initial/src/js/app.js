const { sayHello } = require('./hello.js');

const span = document.createElement('span');
span.innerText = sayHello('Javascript');

document.body.appendChild(span);