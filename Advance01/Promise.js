let prom = new Promise((resolve,reject)=>{
    console.log("Getting Data");
    resolve("Success");
})
prom.then((res)=>{
    console.log("resolve with",res);
})
prom.catch((cat)=>{
    console.log("Error with",err);
})