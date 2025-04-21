const random = Math.round(Math.random()*100 + 1);
const userInput = document.querySelector('#InputGuess0');
const remaining = document.querySelector('.remguess');
const PrevGuess = document.querySelector('.prevguess');
const result = document.querySelector('.result');
const submit = document.querySelector('.sbt');
console.log(random);
let attempt = 10;
submit.addEventListener('click',(e)=>{
    if(!(attempt>0)){
        display(parseInt(userInput.value),attempt,0);
        submit.disabled = true;
        userInput.disabled = true;
        return;
    }else{
    e.preventDefault();
   if(parseInt(userInput.value)>0 && parseInt(userInput.value)<=100){
        if(parseInt(userInput.value) === random){
            display(parseInt(userInput.value),attempt,true);
            submit.disabled = true;
            userInput.disabled = true;
        }
        else{
            attempt--;
            display(parseInt(userInput.value),attempt,false);
        }
    }else{
        attempt--;
        display(parseInt(userInput.value),attempt,false)
    }
}
});
function display(inp,attempt,valid){
    if(attempt>0){
        if(valid){
            PrevGuess.innerText+=`${inp} ,`;
            remaining.innerText = `${attempt} Left`;
            result.innerText = `You Won`;
        }
        else{
            PrevGuess.innerText+=`${inp} ,`;
            remaining.innerText = `${attempt} Left`;
            result.innerText = `You Lose`;
        }
    }else{
        PrevGuess.innerText+=`${inp} ,`;
        remaining.innerText = `0 Left`;
        result.innerText = `You lose the Game`;
    }
}