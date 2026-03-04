function Animal(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;

    this.printInfo = function () {
        console.log(`I am ${this.name} the animal! Age: ${this.age} Color:${this.color}`);

    }
}

//nema logika ova, 
function EarthAnimal(name, color, age, numOfLegs) {
    // 2nacini
    //MNOGU VAZNO
    //this.__proto__=Object.create(new Animal(name,color,age));//tis to kje vlezat kje si se setriaat vnatre
    //vo prototo na this Earth ckeiraj nov objekt pa vnatre pravi custom

    Object.setPrototypeOf(this, new Animal(name, color, age))
    //
    //
    //Do dthe setting like 16 or line 19
    // this.name=name;
    // this.color=color;
    // this.age=age;
    this.numOfLegs = numOfLegs;
    this.walk = function () {
        console.log(`I am earth animal with ${this.numOfLegs} legs`);
    }
}



// function EarthAnimal(numOfLegs){
//     this.numOfLegs=numOfLegs;
//     this.walk=function(){
//         console.log(`I am earth animal with ${this.numOfLegs} legs`);
//     }
// }


// EarthAnimal.prototype=Object.create(new Animal());

//earth animal kje nasleduva od animal kje nosi animal kako parent

// posle 15 linija mozeme sve da pristapime vo EarthAnimal

// let dog=new EarthAnimal(4);//tuka name,color,age; nema da saka
// dog.name="Sharko";
// dog.color="Black";
// dog.age=4;

// let dog=new EarthAnimal("Sharko","Black",4,4)
// dog.printInfo();
// dog.walk();
// console.log(dog);

// water animal site da gi zeme i da dodademe has lags neka bide boolean has legs true ili false i size

//swim
function WaterAnimal(name, color, age, size, hasLegs) {
    Object.setPrototypeOf(this, new Animal(name, color, age));
//mora vo funkcijata da gi imam istite parametri kako parentot

    this.size = size;
    this.hasLegs = hasLegs;
    this.swim = function () {
        console.log(`I am water animal with size ${size} and I ${this.hasLegs ? "have" : "don't have"} legs `);
    }
}

let fish = new WaterAnimal("Fish", "white", 2, "medium", false);
fish.printInfo();
fish.swim();
console.log(fish);



// HOW THE PROCESS OF INHERITANCE USING PROTOTYPR WORKS IN JS

//1. 53linija, new EarthAnimal se vika konstrukto funkcijata na animal
//2. Se desava EarthAnimal constructor function is called 
//3. Object.setPrototypeOf(this, new Animal(name, color, age));
// Set prototype of a new Animal object is created() 19 linija 
//mu se stava parent ti kje dobies nov parent od ovoj objekt
//4. the values are passed to the new Animal() constructor function.
//se setriraat funkciite new Animal(name, color, age) konstruktor funckija i se setriraat 
//5.Animal constructor funcktion is called 
// 6.se animal construktor funkijata object is buld from animal constructor funckstion
//7. The returned animal object is set as PROTOTYPE object that is created.
//8.The current parent EarthAninal is creaated.
//9.EarthAnimal is returned from the new EarthAnimal and stored in our "dog" variable


// Object.getPrototypeOf(dog)

// dak mi go parentot na dog
// sto e animal

// adding method to the prooyupe

// dole ni treba da se se dodade nova metoda

// EarthAnimal.prototype.stop=function(){

// }


// MediaStreamAudioDestinationNode.proptypr.shoavedmey(student){

// }

// prototype student na ovie metodi

// Note which student we are creating;
//this.AcemdyName=network


//STAVI GO VO FUNCTION
//ne vo parametri 61 red false i gore da GI NEMAM VO PARAMETRI
