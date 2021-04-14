// fs = File System
const fs = require('fs');
const path = require('path');

//      # Make dir
fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        throw err
    }

    console.log('Dir was created');
})

const filePath = path.join(__dirname, 'test', 'info.txt');

//      # Write Files
fs.writeFile(filePath, 'Hello from fs.writeFile again', err => {
    if (err) {
        throw err;
    }
    console.log('File was created');
})


//      # Read Files
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err;
    }

    // const data = Buffer.from(content);
    // console.log('Content: ', data.toString());

    console.log(content);
})