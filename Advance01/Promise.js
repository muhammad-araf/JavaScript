// let prom = new Promise((resolve,reject)=>{
//     console.log("Getting Data");
//     resolve("Success");
// })
// prom.then((res)=>{
//     console.log("resolve with",res);
// })
// prom.catch((cat)=>{
//     console.log("Error with",err);
// })

function getdata(dataId)
{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
        console.log("Data",dataId," get");
    },3000);
});
}
// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Data2 get");
//         resolve("success2");
//     },4000); 
// });

// promise.then(()=>{
//     console.log("fetching data1........");
//     promise2.then(()=>{
//         console.log("Fetching data2........")
//      });
// });
console.log("fetching data1...")
getdata(1).then(()=>{
    console.log("fetching data2...")
    return getdata(2);
}).then(()=>{
    console.log("fetching 3...")
    return getdata(3);
}).then(()=>{});