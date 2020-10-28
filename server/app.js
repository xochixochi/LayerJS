const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const port = 4500;

app.use(express.static(path.join(__dirname, './../public/')));

var routes_setter = require('./routes.js');
routes_setter(app);

let server = http.createServer(app);
server.listen(port);
server.on('listening', () => console.log('listening on port ' + port));