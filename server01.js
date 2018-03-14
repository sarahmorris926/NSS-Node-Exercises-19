const { readFile } = require('fs');
const { createServer } = require('http');
const port = 8080;
const server = createServer();

server.on("request", (req, res) => {
    let url = req.url
    let resource = url.slice(-1) === '/' ? url.slice(1).concat('index.html') : `${url.slice(1)}.html`
    readFile(resource, (err, file) => {
        if (err) { res.statusCode = 404;
        return res.end('Not found, dude');
        }
        res.end(file);
    });
  });

server.listen(port, () => {
    console.log('listening on port ', port);
});
