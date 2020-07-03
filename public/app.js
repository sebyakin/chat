const socket = io();

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const wrapper = document.querySelector('.wrapper');

const soundOne = new Audio('1.wav');
const soundTwo = new Audio('2.wav');
const soundThree = new Audio('3.wav');
const soundFour = new Audio('4.wav');

// слушаем сокет на чат сообщение, берем оттуда дату и передаем функции которая пишет сообщения
socket.on('chat message', data => {
    appendMessage(data);
});

// добавляем сообщения других в чат
function appendMessage(message){
    const messageElement = document.createElement('span');

        // условия
        if (message.length < 3)
        {
            wrapper.style.backgroundColor = "PaleGreen";
        }

        if (message.includes("hi"))
        {
            wrapper.style.backgroundColor = "pink";
        }

        if (message.includes("can"))
        {
            wrapper.style.backgroundColor = "green";
        }

        if (message.includes("hello"))
        {
            wrapper.style.backgroundColor = "yellow";
        }

        if (message.includes("awesome"))
        {
            wrapper.style.backgroundColor = "blue";
        }

        if (message.includes("cool"))
        {
            wrapper.style.backgroundColor = "LightSteelBlue	";
        }

        if (message.includes("!"))
        {
            soundOne.play();
            wrapper.classList.add('jump');
            setTimeout(function(){ 
                wrapper.classList.remove('jump'); }, 500);
        }

        if (message.includes("?"))
        {
            soundTwo.play();
            wrapper.classList.add('skew');
            setTimeout(function(){ 
                wrapper.classList.remove('skew'); }, 600);
        }
        
        if (message.includes("are"))
        {
            wrapper.classList.add('color');
            setTimeout(function(){ 
                wrapper.classList.remove('color'); }, 1000);
        }

        if (message.includes("you"))
        {
            wrapper.classList.add('tracking');
            setTimeout(function(){ 
                wrapper.classList.remove('tracking'); }, 1000);
        }

        if (message.includes("weird"))
        {
            wrapper.classList.add('weird');
            setTimeout(function(){ 
                wrapper.classList.remove('weird'); }, 1000);
        }

        if (message.includes("ok"))
        {
            wrapper.style.backgroundColor = 'brown';
        }

        if (message.includes("nice"))
        {
            wrapper.classList.add('nice');
            setTimeout(function(){ 
                wrapper.classList.remove('nice'); }, 300);
        }

        if (message.includes("no"))
        {
            wrapper.classList.add('no');
            setTimeout(function(){ 
                wrapper.classList.remove('no'); }, 1000);
        }

        if (message.includes("."))
        {
            wrapper.style.backgroundColor = 'PeachPuff';
            wrapper.classList.add('scale');
            setTimeout(function(){ 
                wrapper.classList.remove('scale'); }, 1000);
            
        }

        if (message.includes("chat"))
        {
            soundThree.play();
            wrapper.classList.add('chat');
            setTimeout(function(){ 
                wrapper.classList.remove('chat'); }, 1000);
        }

        if (message.includes("wow"))
        {
            wrapper.classList.add('wow');
            setTimeout(function(){ 
                wrapper.classList.remove('wow'); }, 700);
        }

        if (message.includes("words"))
        {
            // take every second element
            for(var i = 0; i < you.length; i += 2) {  
            you[i].classList.add('blur');
            }
        }

        if (message.includes(","))
        {
            wrapper.classList.add('comma');
            setTimeout(function(){ 
                wrapper.classList.remove('comma'); }, 700);
        }
        
        if (message.includes(":)"))
        {
            soundFour.play();
            wrapper.classList.add('smile');
            setTimeout(function(){ 
                wrapper.classList.remove('smile'); }, 400);
        }

    messageElement.innerText = message + ' ';
    messageContainer.append(messageElement);
}

// отправляем свои сообщения 
messageForm.addEventListener('submit', e => {
    // убираем обновление при рефреше
    e.preventDefault(); 
    // берем сообщение
    const message = messageInput.value; 
    // оставляем свое сообщение 
    const messageMyWords = document.createElement('span');
    messageMyWords.classList.add('myWords')
    messageMyWords.innerText = message + ' ';
    messageContainer.append(messageMyWords);
    // передаем его 
    socket.emit('chat message', message); 
    // очищаем строку
    messageInput.value = ''; 
})
