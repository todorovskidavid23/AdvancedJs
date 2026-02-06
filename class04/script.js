// //Function in JS

// function sayHello(){
//     console.log("Hello from my function");
// }

// sayHello()

// //Parametri

// function sumTwoNumbers(num1,num2){
//     return num1+num2;
// }
// console.log(sumTwoNumbers(7,7));
// console.log(sumTwoNumbers("Martin","Mario"));

// //Anonymous function

// let diffTwoNumbers=function(num1,num2){
//     return num2-num1;
// }

// console.log(diffTwoNumbers(3,5))
// //first class cityzent
// //funckija, vresnost na varijabla, itn.


// let multiply=function(num1,num2){
//     return num1*num2;
// }


// let division=function(num1,num2){
//     return num1/num2;
// }

// //Arrow function

// let multiplyArrow=(num1,num2) => num1*num2;
// let divisionArrow=(num1,num2) => num1/num2;

// let sumOfThreeArrow=(num1,num2,num3)=>num1+num2+num3;
// let diffOfThreeArrow=(num1,num2,num3)=>num1-num2-num3;

// let squareNumberArrow=num => num*num;

// let convertCurrency=(currencyType,currencyValue)=> {

//     if(currencyType === "EUR"){
//         return currencyValue/61.5;
//     }
//     if(currencyType ==="MKD"){
//         return currencyValue*61.5;
//     }
// }


// let procut=multiply(2,5);
// let divisionValue=division(2,5);

// sumTwoNumbers(multiplyArrow(2,5),divisionArrow(2,5));
// sumTwoNumbers(2*5,2/5);

// let sumOfThreeArrow = (num1, num2, num3) => {
//     return sumTwoNumbers(sumTwoNumbers(num1, num2), num3);
// };
// let sumOfThreeArrow = (a, b, c) => sumTwoNumbers(sumTwoNumbers(a, b), c);

//Self-inove IIFE (Immediately Invoked Function Expression)



// (function(num1,num2){
//     console.log(num1+num2);
// })(7,7)

// ((num1,num2)=>{
//     console.log(num1+num2);
// })(100,50);

// if (num === 0) {
//     return 1;
// }
// num = Math.abs(num);

// //definirame funkcija
// let array=[1,2,3,(num1,num2 )=> num1 + num2];

// console.log(array[3])

// console.log(array[3](77,77))



// function countDigits(num) {
    

//     let count = 0;

//     for (let i = num; i > 0; i = Math.floor(i / 10)) {
//         count++;
//     }

//     return count;
// }
// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         return true; 
//     }
//     return false; 
   
// }

// function countDigits(num) {
    
//     return Math.abs(num).toString().length;
    
// }

//

let countDigits=function(num){
    return Math(num).toString().length;
}

let checkEvenOrOdd=function(num){
    if(num%2===0){
        return "Even";
    }else{
        return "Odd";
    }
}

let checkPositiveOrNegative=function(num){
    if(num>0){
        return "Positive";
    }else{
        return "Negative";
    }
}


let numberInfo=function(num){
    console.log(`The number ${num} has ${countDigits(num)} digits`);
    console.log(`The number ${num} is ${checkEvenOrOdd(num)}`);
    console.log(`The number ${num} is ${checkPositiveOrNegative(num)}`);
}


function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


function posOrNeg(num) {
    if (num > 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}

console.log(countDigits(32))
console.log(evenOrOdd(2))
console.log(posOrNeg(-10))



function final(number){
    console.log(`Brojot ${number} ima ${countDigits(number)} cifri i e ${evenOrOdd(number)} broj i e ${posOrNeg(number)}`);
}

final(23)
final(-123)


