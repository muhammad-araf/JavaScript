for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
if (sum > 10) {
    console.log("The sum is greater than 10: " + sum);
} else {
    console.log("The sum is less than or equal to 10: " + sum);
}
