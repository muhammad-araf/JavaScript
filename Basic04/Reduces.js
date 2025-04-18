// const arr = [1,2,3,4,5,6,7,8,9,10];
// //1+2+3+4+...+10
// const sum = arr.reduce((acc,curr) => (acc+curr),0);
// console.log(sum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const Sum = shoppingCart.reduce( (sum,i) => (sum+i.price),0);
console.log(Sum);