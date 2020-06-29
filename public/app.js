const messageContainer = document.getElementById('messageContainer');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const socket = io();

socket.on('chat message', data => {
    appendMessage(data);
})

messageForm.addEventListener('submit', e => {
    // убираем обновление при рефреше
    e.preventDefault(); 
    //берем сообщение
    const message = messageInput.value; 
    // оставляем свое сообщение 
    const messageMyWords = document.createElement('li');
    // messageMyWords.classList.add('myWords')
    messageMyWords.innerText = message + ' ';
    messageContainer.append(messageMyWords);

    socket.emit('chat message', message); // передаем его 
    messageInput.value = ''; // очищаем строку
})


function appendMessage(message){
    const messageElement = document.createElement('span');
    messageElement.innerText = message + ' ';
    messageContainer.append(messageElement);
}