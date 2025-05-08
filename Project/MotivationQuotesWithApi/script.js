const url = "https://quotes-api-self.vercel.app/quote/";
const h2 = document.getElementById('h2');
const button = document.querySelector('button');
let quotes;
async function api(){
    const response = await fetch(url);
    quotes = await response.json();
    quotes = quotes.quote;
    h2.innerText += quotes;
}
api();
button.addEventListener('click',(e)=>{
    location.reload();
    
})
