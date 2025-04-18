// const arr = [1,2,3,4,5,6]
//     arr2 = ""
// for(i of arr){
//     arr2 += i + " "
//     console.log(i);
// }
// console.log(arr2)

// arr.forEach( (item) =>{
//     console.log(item);
// }  )

const arr3 = [
    {
        name: "Araf",
        age: 17
    },
    {
        name: "Maham",
        age: 99
    },
    {
        name: "Fasih",
        age: 20
    }
]

arr3.forEach((item)=>{
    console.log(`Name: ${item.name} \t\t Age: ${item.age}`);
})