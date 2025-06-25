    // fetch('https://api.github.com/users/muhammad-araf')
    // .then((res)=>{
    //     return(res.json());
    // })
    // .then((res)=>{
    //     console.log(res.login);
    // })
    // .catch((err)=>{
    //     console.log("Error Occured");
    // });
let data;
(async function getUserData() {
    try {
        const response = await fetch('https://api.github.com/users/muhammad-araf');
        data = await response.json();
        // console.log(data.login);
    } catch (error) {
        console.log("Error Found",error);
    }
    
})();
setTimeout(()=>{
console.log(data);
},500)
