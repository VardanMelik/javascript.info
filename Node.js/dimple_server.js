/*
23-03-2022
Author Vardan Meliksetyan
v16.14.2 documentation
https://nodejs.org/dist/latest-v16.x/docs/api/synopsis.html
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server is working\n');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})