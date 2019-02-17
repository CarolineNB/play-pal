const path = require('path');
const http = require('http');
const express = require('express');
// const socketIO = require('socket.io');


//app.use publicPath
//const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');
const  publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
//var io = socketIO(server);
var users = new Users();

app.use(express.static(publicPath));


// io.on('connection',(socket)=>{
//     console.log('New user connected');
//     socket.on('join', (params, callback)=>{
       
//         socket.join(params.room);
//         users.addUser(params.name, params.pal, params.room);

        
//         socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

//         callback();
//     });

//     socket.on('disconnect', ()=>{
//         console.log('User was disconnected');
//     });

// });


server.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});

