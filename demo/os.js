const os = require('os');

console.log('O-System:', os.platform());
console.log('Arch processor:', os.arch());
console.log('Info about processor:', os.cpus());
console.log('Free memory:', os.freemem());
console.log('Total memory:', os.totalmem());
console.log('Home dir:', os.homedir());
console.log('Uptime:', os.uptime());

