const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('anything', data => {
    console.log('Listing: anything', data)
})

setInterval(() => {
    emitter.emit('anything', {c:3});
}, 1500);