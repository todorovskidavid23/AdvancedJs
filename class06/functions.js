//Functions in JS are also known as First Class Citizens

//1. Stred in a Variable
let sayHello=function (name){
    console.log(`Hello there ${name}`);
}
sayHello("Bob")

//2. Stored in an array niza
let numberStatFunctions = [
    (num) => num > 0 ? "Positive" : "Negative",
    (num) => num %2===0 ? "Even" : "Odd",
    (num) => num > 0 ? num.toString().length : num.toString().length -1

]

console.log(numberStatFunctions[0](123))

//3. Used as an argument to another function
function calculator(num1,num2,calcualteFunc){
    return calcualteFunc(num1,num2);
}
function sum(num1,num2){
    return num1+num2;
}

function difference(num1,num2){
    return num1-num2;
}


//referenca koja funkcija da se bara, ne se povikuva so () ne e vaka sum() !!!
console.log(calculator(7,7,sum))
console.log(calculator(7,7,difference))
//anonimna funkcija
console.log(calculator(15,128,function(first,second){
    return first*second;
}))

console.log(calculator(15,128, (first, second) => first * second ));

//4. Used as return value from another funciton
function calculate(operator) { // +, -, /, *, ** 
    switch (operator) {
        case "+":
            return function(num1,num2){
                return num1+num2;
            }
        case "-":
            return (num1, num2) => num1 - num2;
        case "/":
            return function(num1,num2){
                return num1/num2
            } 
                
        case "*":
            return (num1, num2) => num1 * num2;
        case "**":
            return (num1, num2) => num1 ** num2;
        default:
            console.error("Enter valid operator !")
            break;
    }
}
let result=calculate("*");//definicjija na funkcija
console.log(result(7,7));

//5. Can have properties like a regular objects in JS

//6. Can have methods like a regular objects in JS
function sayGoodbye(name){
    return `Goodbye there ${name}`;
}
sayGoodbye.defaultName="Dav";
console.log(sayGoodbye(sayGoodbye.defaultName))

// .propertie i ima metod name
sayGoodbye.differentGreeting=function(name){
    return `Bye bye ${name}!`
}
console.log(sayGoodbye.differentGreeting("Martin"))



//НИЗА arguments
function print(){
    console.log(arguments[0]);
    console.log(arguments[1]);
}
print("David","Dav");


console.log("Dac","Mar");



function myCustomLog(){
    let result="";
    for (const argument of arguments) {
        result += argument + " ";
    }
    console.log(result);
}
myCustomLog("David ", "Hello ","  World",true,false,23)
myCustomLog(true,false,2,32,"David")



//Higher-Order Functions
//1. forEach()
let array=[22,30,1,5,6,0,-12,-22,-4,100,1002];

//namesto for
array.forEach(function(num){
    console.log(num);
});

array.forEach((num) => console.log(num))


//2. filter()
//ЈА ВРАЌА ИСТАТА НИЗА
positiveNums=[];
for(const el of array){
    if(el>0){
        positiveNums.push(el);
    }
}
console.log(positiveNums)

// array.filter()
// let positives=array.filter(num => num > 0);
let positives=array.filter(function(num){
    return num > 0;
});



console.log(positives);


//3. map()
//ВРАЌА НОВА НИЗА
//increase each elememnt for 1 of the array

// let increased=[];
// for(const elememnt of array){
//     increased.push(elememnt+1);
// }
// console.log(increased);

let increasedByOne=array.map(num => num + 1)
console.log(increasedByOne)

//4. sort()
//Bubble Sort
//Ascending oreder
let sortedByAsc = array.sort((a,b)=>a-b)//rastecki redosled
//obagjacki redosled(b-a)
console.log(sortedByAsc);

let names=["Bob",'Gill',"Adam","Ognen"];
// let sortedNames=names.sort().reverse();
// let sortedNames=names.sort((a,b)=>a.localeCompare(b))
//rastecki redosled
// console.log(sortedNames);


//REFERENCE
// pokazuvaci kon ista memoriska lokacija Pass by reference

// nizi objekti funkcii(samo vo java sctipt) pass by values
//int,float, value types.

let newNames=names;
newNames.push("Cvetko")
console.log(newNames)
console.log(names)



