//Global
//The name variable lives it is declared in the global scope
let username="David";

function printName(){
    // let name=123;
    //the imput parametar name belongs to the block (function scope)
    console.log(username);
}
// console.log(name)
// console.log(username)
console.log("Filip");

let displayInConsole=() => {
    let message="Hello there and welcome";
    username="Mario"
    console.log(`${username},${message}`);
}
message="New message"

displayInConsole()


let sayHello = ()=>{
    username="marko";
    console.log(`Hello there ${username}`);
}


let sayGoodbye=()=>{
    console.log(`goodbye ${username}`)
    
}
sayHello()
sayGoodbye()


function first(){
    let number = 10;
    // let username = "Marko";

    function second(){
        let positiveNum = 20;
        console.log(number);
        function third(){
            let negativeNum = -10;
            console.log(username, positiveNum, negativeNum);
        }

        third(); // повик на third
    }

    second(); // повик на second
}

first(); // повик на first

var x=20;
console.log(x);
x=40;

var x=5;
console.log(x)

y=120;
console.log(y)

var y=10;
console.log(y)

// TypeScript
//let firstName : string ="David"
// 👉 Внатрешниот scope има пристап до надворешниот.
// 👉 Надворешниот нема пристап до внатрешниот.

// Global
//   └── first()
//         └── second()
// second() гледа нагоре (first + global)

// first() НЕ гледа во second

// global НЕ гледа во first или second


function multiply(num1, num2 = 10) {
    console.log(`Result: ${num1 * num2}`);
}

multiply(10, 3);
multiply(5)
