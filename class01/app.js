let randomArray = [1, 2, 3, "Martin", "Ivan", undefined, true, false, null, 10.5, NaN];
console.log(randomArray);

//1.Arrays and loops

let names = ["Martin", "Mario" , "Klementina", "Marko", "Iva"];
let numbers = [1,2,3,4];

let counter = 0;

while(counter < names.length) {
    console.log(names[counter]);
    counter++;
}

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//2.Functions 

//function with no input parametars

function printNames(){
    for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
}

printNames();

function printItems(){
    for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
}

printItems();

//function with input parametars

function print (array) {
   for(let i = 0; i < array.length; i++) {
   console.log(array[i]);
}
}

print(randomArray);
print(numbers);
print(names);


function greetPerson (personName){
    for(let i = 0; i < personName.length; i++) {
    console.log(`Zdravo ${personName[i]}`);  
}
    
}

greetPerson(names);


// 3.Objects

// By usin object literal 

let student = {

    firstName: "John",
    lastName: "Doe",
    age: 22,
    birthTear: 2004,
    subjects: ["HTML/CSS", "BJS", "AJS"],
    currentSubject: "AJS",

    printSubjects: function(){
        for(let sub of this.subjects){
            console.log(sub);
        }
    }

}

console.log(student);
console.log(student.printSubjects());


//By using the Object();

let trainer = new Object();

trainer.firstName = "Martin";
trainer.lastName = "Panovski";
trainer.birthYear = 1993;
trainer.calculateAge = function () {

    const year = new Date().getFullYear();
    return year - this.birthYear;
}


console.log(trainer);
console.log(trainer.calculateAge());

// By using contructor function 

function Academy (name, city, address, numberOfStudents){
    
    this.name = name;
    this.city = city;
    this.address = address;
    this.numberOfStudents = numberOfStudents;
    this.getNumberOfStudents = function() { 
        return this.numberOfStudents;
    } 

    this.getLocation = function (nameOfCity){

        if (nameOfCity.toLowerCase() === this.city.toLowerCaseSS()) {
            console.log(`The location of this ${name} Academy is in ${this.city} on ${this.address}`);
        }
        else {
            console.log(`There is no ${this.name} academy on this location.`);
        }
    }
}

let avenga = new Academy("Avenga", "Skopje", "Test addresss 1", 120);
let qinshift = new Academy("Avenga", "Ohrid", "Test addresss 2", 120);
let sedc = new Academy("SEDC", "Nis", "Test addresss Nis", 150);

console.log(avenga);
console.log(qinshift);
console.log(sedc);

avenga.getLocation("Ohrid");
qinshift.getLocation("Ohrid");
sedc.getLocation("Ohrid");

