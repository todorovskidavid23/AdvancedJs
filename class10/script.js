//1.1Memory heap
//1.2 call stack
//2. Web APIs DOM,AJAX,setTimeout
//3.CallBackQueue EventQueue
//4.event loop

//callback gunkcija koja treba da se izvrslik;

//objekt literals samo eden objekt
// const person={
//     name:"David",
//     age:23,
// }

//CONSTRUCTOR FUNCTION mozeme da kreirame poveke objekti
// function Person()

// niza od objekti dobivame SEKOGAS
// enkapsuliranje se vo eden objekt nisto ne sakame od nadvor,
// site provertinja i metodi i site funmkcionalnpsti 
// samiot objekt ne dozvoluva direktno da gi korisitme.da
// set i get nesto.da

// logicka celina kako person i sve vnatre properti funckionalnosti
// name i lastname nikogas neamme full name
// funkcionalnost get full name

// ako celo vreme go pravime toolbar, togas nie 
// vnatre si pravis funkcii
//PRAVIME ENKAPULACIJA  


//Properties imame name,BirthYear namesto AGE ,email
//Methods greet(),updateEmail(newaEmail),


// .this keyword
// apstrakcija
//this pokazuva kon momentalniot objekt , taa funkcija e del od globalniot objekt,
//object sekogas pokazuva kon samiot objekt
//this in arrow functions nemaat svoj this, go nasleduvaat od kade ke se izvrsat.
// ke se nasledi toj scope, bine dodeli i go ovoj this, 



//Konstruktor Funkcii;
//Constructor funckion

function Product(name,category,quantity,price){
    this.name=name;
    this.category=category;
    this.quantity=quantity;
    this.price=price;
    this.inStock=quantity>0;

    this.updateStock=function(amount){
        if(amount > this.quantity){
            // throw error
            console.log("Not enough products!");
            return;
        }
        this.quantity=this.quantity-amount;
        this.inStock=this.quantity>0;//logika za update na stock
    }
}


// let product=new Product("Laptop","Laptop",10, 1200);
// console.log(product.inStock);
// // ENKAPSULACIJA NA LOGIKATA DA SE UPDATE STOCK
// product.updateStock(10);
// console.log(product.inStock);

// console.log(this);//globalen objekt

function whereIsThis(){
    console.log(this);//pak vo globalen scope
    
}
// whereIsThis();

// this si pokaziva kon svojot objekt

// this e vo globalen scope


// ***arrow funckiite nemaat svoj this.***

// vnatre vo objektot imame funkcija i vantre imame this i go zima scopeot na ojektot

const person1={
    name:"David",
    greet:()=>{
        // let self=this
        console.log(this);
    },
    greet1:function(){
        const arrow=()=>{
            console.log(this);
        };
        arrow()
    }
};

person1.greet();
person1.greet1();

// bind funkcija so samiot objekt togas ke si se vrze so svojot objekt//metodata se vrzuva so TOJ this


function Car(){
    console.log(this);
    this.name="Toyota";
    this.drive=function(){
        console.log(this);
    }
    this.start=()=>console.log(this);
    
    
}
Car();
let car=new Car();
car.drive();
car.start();

//closures se zatvara skope sto ne moze da go pristapi od nadvor, zatvara promenliva i funkcija vo eden scope, i taa funkcija ke moze da pristapi do taa promenliva

//id generator