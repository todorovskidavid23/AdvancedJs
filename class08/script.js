// setTimeout(function(){
//     console.log("This happends later!");
// },2000)

// setTimeout()

// console.log("I am first")
// console.log("I am second")
// console.log("I am third")

let first=()=>console.log("I am first")
let second=()=>console.log("I am second")
let third=()=>console.log("I am third")

// //If we call these functions in the followning order they will get executed in the exact same order
// // first();
// // second();
// // third();

// console.log("==========Another example 1 of setTimeout==========");

// first();
// setTimeout(second,2000);//se cuva vo EventQueue Single Thread
// third()


// console.log("==========Another example 2 of setTimeout==========");
// first();
// setTimeout(function(){
//     console.log("I am second");
// },0);
// third();

// console.log("==========Another example 3 of setTimeout==========");

// first();
// setTimeout(function(){
//     console.log("I am sssecond");
//     second();
// },2000);
// third();

// console.log("==========Another example 4 of setTimeout==========");

// setTimeout(function(){
//     first();
//     setTimeout(function(){
//         second();
//     },2000)
// },3000)
// third();

//jsv9000.app
//callstack se polni samo ako ima funkcija MNOGU VAZNO
//CallBacks
console.log("==========CallBacks==========");

// let sayHello = (personName) => 
//     console.log(`First say hello! Hello, ${personName} !`);

// let sayGoodbye = (personName) =>
//     console.log(`Bye Bye ${personName}`);


// let greetSomeone = (callback) =>{
//     setTimeout(function(){
//         console.log("Greet person first!");
//         // callback(personName);
//         callback("David");
//     },1000)
// }

// greetSomeone(sayHello)

setTimeout(function(){
    console.log("First");
    setTimeout(function(){
        console.log("Second");
        setTimeout(function(){
            console.log("Third");
        },1000);
    },1000);
},1000);



