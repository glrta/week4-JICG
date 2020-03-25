const http = require('http');
const router = require('./router');

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

http.createServer(router).listen(port, hostname, () => { console.log(`Listening on ${hostname}:${port}`)})
