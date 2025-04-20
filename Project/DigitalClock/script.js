const clock = document.querySelector('.clock');
// clock.innerText(date.toLocaleDateString());
setInterval(()=>{
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
},1000)