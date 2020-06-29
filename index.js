const express = require('express');
const app     = express();
const server  = require('http').createServer(app);
const io      = require('socket.io').listen(server);

app.use(express.static('public'));


io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
      socket.broadcast.emit('chat message', msg);
    });

  });

  
server.listen('3000', () => {
    console.log('Server listening on Port 3000');
})