const express = require('express')
const app = express();

const io = require('socket.io')(3000,{
    cors:{
        origin:"*",
    },
});


const users = {}


io.on('connection',(socket)=>{

    socket.on('new-user',name1=>{
        users[socket.id]=name1;
        socket.broadcast.emit('user-connected', name1)
    

    socket.on('send-chat-message',m=>{  //name also have to be published
        socket.broadcast.emit(`${users[socket.id]} : ${m}`)
    })
        
            
        });
    })

io.on('disconnect',()=>{
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
})
    console.log("new user")


