const arr = [1,2,3,4,5,6,7,8,9,10];
//1+2+3+4+...+10
const sum = arr.reduce((acc,curr) => (acc+curr),0);
console.log(sum);