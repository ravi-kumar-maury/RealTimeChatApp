const socket = io('http://localhost:3000')

var message = document.getElementById('message-input');
var input = document.getElementById('send-button');
var container =document.getElementsByClassName('message-container')

const name1 = prompt("New Guys ? please enter your name")

appendMessage('You Joined')
socket.emit('new-user',name1);


socket.on('user-connected',name1=>{
    appendMessage(`${name1} connected` )
})

socket.on('user-disconnected',name1=>{
   appendMessage(`${name1} disconnected`)
})


socket.on('chat-message',data =>{
    appendMessage(`${data.name}:${data.message}`);
})

container.addEventListener('submit',e=>{
    e.preventDefault()
    const m = message.value;
    appendMessage(`You : ${m}`)
    socket.emit('send-chat-message',m)
    message.value=''
    
})



function appendMessage(mess)
{
   const  newDiv = document.createElement('div');
   newDiv.innerText = mess
   container.append(newDiv)
}