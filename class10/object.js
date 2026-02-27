let obj={
    name:"David",
    lastName:"Todorovski",
}
//prima objekt od koj sto ke kreira nov objekt
let person=Object.create(obj);
console.log(person.name);
console.log(person.lastName);
//kako spread operatorot

// assign gi printa site propertinja od eden i povekje objekti vo daden opbjekt

const target={a:1,b:2};
const source={b:4,c:5};

let obj1={...target,...source};//so spread operator
//kade da gi stavime i od kade zimame
//vo target od source
//NOVI OBJEKTI PRVO VO TARGET GI IMAME I SI OSTAVUVAAT TAMU
let obj2=Object.assign(target,source)
console.log(obj1);
console.log(obj2);


//entries e sakame da go iterirame objektot da gi zimame kluc parovite,
//da keys so values, nizi od objekt,
//keys site klucevi, values values, entries zaedno

console.log(Object.entries(obj));//[key-value]
console.log(Object.keys(obj));//[keys]
console.log(Object.values(obj));//[values]

for(let [key,value] of Object.entries(obj)){
    console.log(key,value);
}




//freeze() metod sto go zamrznuva objketot koga sme go napravime i ne dozvluva da se menuva
//

// let obj3={
//     name:"David",
//     lastName:"Todorovski",
// }

let obj3={...obj};//kopirame obj vo obj3
Object.freeze(obj3)//go zamrsnuva objketot i ne dozvoluva nisto na mu se napravi
obj3.name="Bob";
obj3.newProp="something";
console.log(obj3);


let config={
    apiUrl:"",
    apiKey:"",
    user:{ }
};
// Object.freeze(config);
//sigurni sme deka nemame opcija za menuvanje;
// config.apiKey="new"
//kje si ja napravime konfiguracijata i nema da se menja

// runtime koga raboti aplikacijata

console.log(Object.isFrozen(config));//false

if(!Object.isFrozen(config)){
    Object.freeze(config);
}
console.log(Object.isFrozen(config));//true

//ova se koristi vo konfifuracii
//ne smee da se smeni da se zamrzne da ne go mislime deka nekogas kje se smeni



//seal()
//objektot go pravi gi zaklucuva PROPERTIES , samo sto mozeme da gi menuvame, ne moze da gi briseme
//templateot e zacuvam samo sto gi menuvame vrednostite


let config1={
    apiUrl:"",
    apiKey:"",
    user:{ }
};

Object.seal(config1);

config1.apiKey="1231234dad";
config1.apiUrl="www.dasdsa.com"
config1.user={
    id:1,
    name:"David",
}
console.log(config1);
delete config1.apiKey;
config1.newProp="something";
console.log(config1);

console.log(Object.isSealed(config1));//true a frozen e
console.log(Object.isSealed(config));//true
console.log(Object.isSealed(obj));//false nikade ne mu napravivme sealed()

