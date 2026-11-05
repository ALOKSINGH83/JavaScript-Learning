//Synchronous JavaScript

// let a = 10;
// console.log(a);
// let b = 20;
// console.log(b);
// let sum = a + b;
// console.log(sum);

//Asynchronous JavaScript

setTimeout(() => {
    console.log("I am a message from setTimeout"); //This will be printed after 2 seconds because of Browser not js.Browser holds the function and after 2 sec it pushes to call stack to execute it.
}, 2000);

setTimeout(() => {
    console.log("Hello World!");
}, 2000);

console.log("Apna College");