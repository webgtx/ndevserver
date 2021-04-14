const path = require('path')

console.log('Filenname: ', path.basename(__filename));
console.log('Pwd:', path.dirname(__filename));
console.log('Ext:', path.extname(__filename));
console.log('Pasre:', path.parse(__filename));
console.log(path.join(__dirname, 'server', 'index.html'));