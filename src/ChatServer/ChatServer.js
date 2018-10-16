
//const server = require('http').createServer();
//const io = require('socket.io')(server);
var express = require('express');
var client = require('socket.io');

var app = express();
const PORT = 8000;
console.log('Chat server starting...');

server = app.listen(PORT, function (err) {
    if (err) {
        throw err;
    }
    console.log('Chat server started!');
    console.log('Listening on port: ' + PORT);
});

io = client(server);

io.on('connection', function (client) {
    console.log('client connected: ' + client.id);

    client.on('SEND_MESSAGE', function (data) {
        io.emit('RECEIVE_MESSAGE', data);
        console.log(client.id + ' sent a message.');
    });

    client.on('disconnect', function () {
        console.log('client disconnected: ' + client.id);
    });

    client.on('error', function (err) {
        console.log('received error from client: ' + client.id);
        console.log(err);
    });
});