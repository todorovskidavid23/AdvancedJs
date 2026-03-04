//Objects part 3

//klasi nasledivamke 
// class
//input parametar zagradi ()
//nivo na klasa samo ime na funckija.
//vo consktruktor od nea istancirame objekti od ovaa funkcija
//template ednas defnniram klas. opisi bilo kakov ovjekt.
//klasata e eden red od objektot od nejze pravime objekti
//klasa e must za da pravime objketi
//class Vehicle si imame properties i metodi
//vo constructor setirame properties, mozeme da gi prima kako nunput na parametri.
//da se primat input parametrite 
//default
//isto istancirame na OBJEKT?
// () zagradite na kostruktorot na klasata da se setiraat vnatre vo nego

//Classes and Inheritance in JS
class Vehicle{
    constructor(id, model, yearOfMake, price){
        this.id=id;
        this.model=model;
        this.yearOfMake=yearOfMake;
        this.price=price;
    }
    displayInfo(){
        console.log(`${this.id}. ${this.model} | Year: ${this.yearOfMake}| Price: ${this.price}`);
    }
}

//vo PARENTOT GI PROSLEDUVAME
//extends nasleduva
class WheeledVehicle extends Vehicle{
    constructor(id, model, yearOfMake, price, numberOfWheels, fuelType){
        //super() means the constructor of the parent class
        super(id, model, yearOfMake, price);//Superioren konstruktor ust e Parentot 
        //super e kind of funkcija sakas da go povikam konstruktorot na parentot ust toj sto e posle extend
        //it will call the parent constructor
        this.numberOfWheels=numberOfWheels;
        this.fuelType=fuelType;
    }

    drive(){
        switch(this.fuelType){
            case "petrol":
                console.log(`This car spend 10l/100km`);
                break;
            case "diesel":
                console.log(`This car spend 6l/100km`);
            case "gas":
                console.log(`This car spend 3l/100km`);
                break;
            default:
                console.log("No info for consumption");
                break;
        }
    }
}

//ne konkatanirame nisto ust ${}

//istancirame
// let ford=new Vehicle(1, "Ford Focus",2022,25000);
let ford=new WheeledVehicle(1, "Ford Focus",2022,25000,4,"petrol");
// let toyota=new Vehicle(2, "Toyota Corola", 2018, 18000);
let toyota=new WheeledVehicle(2, "Toyota Corola", 2018, 18000,4 ,"gas");
console.log(ford);
ford.displayInfo();
console.log(toyota);
toyota.displayInfo();

ford.drive()
toyota.drive()

//kostruktor e keywork vo klasi samo toj mozeme da koristime objekt
//vo klasata postoi konstrukrot toj e konstruira objekt na enda klasa
//povika na konstruktorot na edna clasa so LET TOYOTA= NEW WHELLED

class MathOperations{
    // constructor(){
        // static this.PI=3.14;//nema potreba kako vlezen parametar
    // }
    static PI=3.14;

    static sum(a,b){
        return a+b;
    }

    static diff(a,b){
        return a-b;
    }

    static multiply(a,b){
        return a*b;
    }

    static division(a,b){
        if(b===0){
            console.log("Cannot devide wby 0");
        }
        return a/b;
    }

    static areEqual(a,b){
        return a===b;
    }


}

// static tip na metod

console.log(MathOperations.areEqual(5,10));

let div=MathOperations.division(20,80);
let sum=MathOperations.sum(20,80);
let calc=MathOperations.sum(20,80)/MathOperations.division(10,5);
console.log(div);
console.log(sum);
console.log(calc);


//stativ metodi, zada ne pravime objekti na klasata
//klasa Math.random, Math.floor(), Math.PI

console.log(MathOperations.PI);
console.log(Math.PI);

//interface tip entitet na clasata Math se vika si ima property 

//Kako da znam static i static property zavisti za sto ni treba



//getters i //seters
//sekoj klasa moze da si ima svoi getteri i setteri
//mozeme dopolnitelna logika na niv TIE SE METODI koi to imaat
//ne se povikuvaat vo istancata,
//bez zagradi za povivk (myelectriccar.work) BEZZ ()

//metodi ili funkcii sto go endlaat zimanje i setiranje na vrednosta na nekoe property

//So golema Bukva sekogas Classes

localStorage.setItem("ford-car",JSON.stringify(ford));
localStorage.setItem("toyota-car",JSON.stringify(toyota));
// stringify


//mora da se isprasira vo OBJEKT
let fordObj=JSON.parse(localStorage.getItem("ford-car"));
console.log(fordObj);


//prvo vikanje na api vo local storage