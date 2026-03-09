//import from another js file
//ovde ne treba .js tuku samo imeto na js fileot
const funcs = require("./functions");


console.log("Hello there from my script file");

let a=10;
let b=20;

let person={
    fullName: "David Todorovski",
    age:23,
    jobTitle: "Software Developer",
}

let printPersonInfo=(person)=>{
    console.log(`FullName: ${person.fullName} | Age: ${person.age} | Job posision: ${person.jobTitle}`);
    
}
console.log(a);
console.log(b);
printPersonInfo(person);


funcs.sayHello("Bob");
funcs.sayGoodbye("Bob");
funcs.printInConsole("This is something to be printed in console");


//rabota na backedn greskite se pokazuvaat podetalno
//class stack infomaciite da ni se 