const http = require('http'),
        fs = require('fs'),
        path = require('path');

const server = http.createServer((req, res) => {
    let contentType
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath);

    // Mime types
    !ext ? filePath += '.html' : null
    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
        default:
            contentType = 'text/html'
            break;
    }

    // Static logic
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

const port = process.argv[2] || 4040;
server.listen(port, () => {
    console.log(`Server has been started on port ${port} ...`);
})
