//kje treba vo razlicni skripti
//modularizacija posebni sript fajlovi
//

// import sum from "./modules/mathService.js";
// so destrukcija

import {sum,difference, multiply, division} from "./modules/mathService.js";

// import ImeBiloKakvo_operations from "./modules/mathService.js"

// console.log(ImeBiloKakvo_operations.sum(10,25));


console.log(sum(10,25));
console.log(difference(10,25));
console.log(multiply(10,25));
console.log(division(10,25));

//CORS policy only from chrome,chrome extenction
//ne znae koj e server a koj klient 
//i server i klient se se budi ima preveniranje cross platform  klient kon server
//od ist server doagjaat povocite
//so live server si raboti, gi hosta 
//SO MODULI MOZE BILO KADE DA SE HOSTIRANI
//logika i funkcija na edna strana ZA TOA SE KOTISTI MODULES


//moze da se kostitat vo klasa vo objekt kako modules

console.log("=========classMathService=========");


import {Math} from "./modules/classMathService.js"
// import MathOperation from "./modules/classMathService.js"


console.log(Math.PI);
console.log(Math.sum(22,33));


//filter service