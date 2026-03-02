// sposobnost inhetitance eden od 4
//postulati 4 stolbovi
//enkapsuacija,apstrakcija,nasleduvanje,polimorfizan
//sposobnost da objektite da si implementiraat svojstva
//da ne se povtoruvame
//DRY dont repete youeself
//edno e zaedniko za site
//site si imaat svoi propertiessi methods
//se naleduva od klasi.
//OOP jazivi od klasi ide se naldeuva od klasa a od taa kalsa se istanciraat objekti
//obektite dnakseduvaat eden od drug.


//site vechivles si imaat 
// wheeled vechicled i plovacki
//koli4 number of wheeles e property
//kopneni i vodni
//RESIKORISTUVANJE NA NESTATA I PAK DA IMAME SPECIFICNOSTI NA NASITE OBJKETI I IMPLEMETACII

function Vehicle(id,name,serialNumber,price){
    this.id=id;
    this.name=name;
    this.serialNumber=serialNumber;
    this.price=price;
    this.printVehicle=function(){
        console.log(`${this.id}.${this.name},Serial No.${this.serialNumber},Price:${this.price}`);
        
    }
}
//printVecihle ako bese arrow function kje si pokazuvase na globlaen scope.
//MNOGU VAZNO
// let vehicle1=new Vehicle(23,"Mercedes","23","20000");
// vehicle1.printVehicle()


let obj={};
console.log(obj);//prazen objekt
//vnatre imame Prototype
//site objketi nasleduvaat
//site imaat ovoj objekt

let wheeledVehicle=Object.create(new Vehicle(1,"Ford",123,5000));

wheeledVehicle.numOfWheels=4;

wheeledVehicle.drive=function(){
    console.log("Wroom,Wroom...");
}

console.log(wheeledVehicle);
//drive
//

let car=Object.create(wheeledVehicle);
car.fuelTankCapacity=50;
car.drive();
car.printVehicle();


console.log(car);

let bike=Object.create(wheeledVehicle);
bike.id=2;
bike.name="Specialized";
bike.price=500;
bike.serialNumber=112;
bike.numOfWheels=2;
bike.drive();
bike.printVehicle();
console.log(bike);



// Prototype Chain
//kola i imame fuelTankCapacity
//prv lanec e Vehicle.
//vtor lanec si imame vehicle si imap ritap kon site properties


//da moze da se nasledi mora da go pravime na snkeaky way sekoj pat koga kreirame objket 
//property ima _proto_ ne moze da se menuva
//
//vo proto imame koj e negoviot parent
//obj ako nema parent vo protot kje ima Object, gavniot objek na javascript

//_proto_ object od Object

// ovoj e glaven objket i nad nego nema nisto drugo


//nemas vo bike objekt od id vidi vo negovto proto ima wheeled viacle od tamu imali id nema idi vo negoviot parent vo Vehicle i go naogja toa property
//idi po red i bara dali ima MODEL ako nema stavi undefined 
// _proto_ MNOGU VAZNA RABOTA 


// so create 
let wheeledVehicle1=new Vehicle(3,"Seat",112233,10000);//direkto istanciranje na objket

//Obcjet to use as a prototype toj sto kje go kostisti kako propotip ustavi kje mu bide parent

// let wheeledVehicle2=Object.create(wheeledVehicle);

//e isto kako ovie dve linni pod

let wheeledVehicle2={};

wheeledVehicle2.__proto__=new Vehicle(4,"Yugo",123334,500);//site properties vo tebe kje ni nalsedis od ovoj model na vehicle 
console.log(wheeledVehicle);
console.log(wheeledVehicle1.__proto__);
console.log(wheeledVehicle2);// brazen ovjek ama prototype e ne Vehicle
//object creeate mu stava nov objekt i plis imas novi
//GI DOBIVA PROTOTYPR INHERITANCE


