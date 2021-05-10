const express = require('express')
const app = express();
const io = require('socket.io')(3000,{
    cors:{
        origin:"*",
    },
});

io.on('connection',(socket)=>{
    console.log("new user")
    socket.emit('chat-message','hello world')
})
console.log("runnig on port "+process.env.PORT)

