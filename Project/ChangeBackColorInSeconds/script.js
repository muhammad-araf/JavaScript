const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.querySelector('body');
let change;
let stoping;
start.addEventListener('click',function(){
    function change(){
        body.style.backgroundColor = '#'+Math.round(Math.random()*159999+1);
    }
    stoping = setInterval(change,500);
})
stop.addEventListener('click',function(){
    clearInterval(stoping);
})