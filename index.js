const http = require('http');
const fs = require('fs');
const path = require('path');
const { runInNewContext } = require('vm');
const yargs = require('yargs');

const argv = yargs
    .option('port', {
        year: {
            description: 'the port to listen to (4444 by default)',
            type: 'number',
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data);
    //     })
    // }
    // if (req.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data);
    //     })
    // }
    filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    const ext = path.extname(filePath);
    let contentType

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        default:
            contentType = 'text/html'
            break;
    }

    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': contentType
                    })
                    res.end('Error');
                } else {
                    res.writeHead(200, {
                        'Content-Type': contentType
                    })
                    res.end(data);
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content);
        }
    })
})

const port = argv.port ?? 4444;
server.listen(port, () => {
    console.log(`Server has been started on port ${port} ...`);
})