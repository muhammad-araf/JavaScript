//Immediately Invoked Function Expression
//IIFE is a function that runs as soon as it is defined
(function hello (){
    console.log("Hello World");
})();
// hello()
// () => {

// }
((name) => {
    console.log(`Hello ${name} Where are you ${name}`);
})("Araf");