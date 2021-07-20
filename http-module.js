const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the homepage');
  }
  if (req.url === '/about') {
    res.end('Welcome to the about page');
  } else res.end(`<h1>OOps this page does not exist</h1>`);
});

server.listen(5000);
