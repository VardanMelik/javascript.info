// Example 1
/*const http = require('http');

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end('Node.js server is working');
}).listen(8080);*/


// Example  2
// url/?firstName=Gagik&lastName=Mamikonyan
/*
const http = require('http');
const url = require('url');

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true).query;
    let text = q.firstName + " " + q.lastName;
    //res.write(req.url);
    res.end(text);
}).listen(8080);
*/