const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('.result');
    if(isNaN(height)===NaN || height === '' || height < 0){
        let bmi = "Something went Wrong";
    }else if(isNaN(weight) || weight === '' || weight < 0){
        bmi = "Something went Wrong";
    }else{
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
    }
    result.innerHTML=`<span>${bmi}</span>`;
    console.log(bmi);
    
})