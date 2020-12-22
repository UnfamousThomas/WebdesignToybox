const express = require('express');
const app = express();
var http = require('http');
const server = http.createServer(app);

var io = require('socket.io')(server);

server.listen(90);

app.use('/public', express.static('public'));


require('./api/utils/SocketController').registerSockets(io);
require('./api/routing/RouteController').registerRoutes(app, io);

io.on('connection', function (socket) {
    socket.on('test', function (data) {
        console.log("bad")
    })
});