const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('welcome to our website.');
        res.end(); 
    }
    else if(req.url === '/about') {
        res.write('Here is about section');
        res.end();
    }
    else {
        res.write('we cant find this page');
        res.end();
    }
});


server.listen(5000)
