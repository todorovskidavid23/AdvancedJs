// // function someFunction(calculationFunc) {
// //     let result = 100;
// //     setTimeout(() => {
// //         result = 500;
// //         calculationFunc(result);
// //     }, 1000);
// // }

// // function add100(num) {
// //     console.log(`${num + 100}`);
// // }


// // someFunction(add100(1));

// // function callInOrder(){
// //     setTimeout(function(){
// //         console.log("1.First Thing,preparing fot the second");
// //         setTimeout(function(){
// //             console.log("2. Second Thing");
            
// //         },2000)
// //     },2000)
// // }

// // // console.log("First")
// // // setTimeout(function(){
// // //     console.log("Second");
    
// // // },1500)

// // // console.log("Third")

// // callInOrder()



// // function complexCallInOrder(){
// //     setTimeout(function(){
// //         console.log("1. First thing, preparing for second");
// //         setTimeout(function(){
// //             console.log("2. Second thing preparing for third");
// //             setTimeout(function(){
// //                 console.log("3. Third thing preparing for fourth");
// //                 setTimeout(function(){
// //                     console.log("4. Fouth Thing preparing for Fifth");
// //                     setTimeout(function(){
// //                         console.log("5. Fifth thing preparing for sixth ");
// //                         setTimeout(function(){
// //                             console.log("6.Sixth FINAL thing");
                            
// //                         },1000)
// //                     },1000)
// //                 },1000)
// //             },1000)
// //         },1000)
// //     },1000)
// // }

// // complexCallInOrder()

// //Haduken code, Callback hell, Pyramid of doom !

// //Promise

// //Poseben tip na objekt koj sto pomaga resenie za cekanje
// //ti vetuvam deka ke dobies odgovor pozitiven odgovoe ili negativen,
// //Promises immat e states 
// // PENDING cekame da stigne response
// // Fulfilled
// // Reject

// //promise od asinhrono izveduvawe

// function workTimeResolvation(workTime){
//     return new Promise((resolve,reject)=>{
//         if(workTime<=0){
//             reject("It's too short of a work time. Please try again");
//         }
//         setTimeout(function(){
//             resolve("This time is correct! Welcome")
//         },workTime)
//     })
// }



// // fetch("test/url");

// workTimeResolvation(0)//rejected promise
// .then(data=>{
//     console.log(data);//od povikot na resolve, jas ke ti dadam odgovor zavisi sto se desava 
// })
// .catch(err=>{
//     console.log(err);
    
// })


// // fetch('https://jsonplaceholder.typicode.com/todos/1')//vrakja promise. rezultatot nie go hendlame so then i catch
// //       .then(response => response.json())
// //       .then(json => console.log(json))
// //       .catch(err=>console.log(err))


//     //   POSEBNI TIOVI NA OBJEKI
//     //   uspesna zavrsena rabora ideme kon resolve
//     //   ako neuspesno e zavrsi ideme kon rejecy


//     // resolve i reject morame da stavime UNDIFIEND ni dava
//     //undifinied()
//     //resultat poseben tip na objekt za polesno handlanje na asinhrono
// let myPromise = new Promise((resolve,reject)=>{
//     // resolve("This promise was resolved successfully");
//     reject("This promise was rejected");
// });
// console.log(myPromise);



//not found NE STIGNALO DO API I NE SE VRAKJA NAZAD
//NOT FOUND NE NI STINGALO DO API DEKA NE E NAJDENO NA APITO
//NE VLAGA VO CATCH DEKA NEMA NI VLEZENO VO PROMISOT
//SI DOBIL PRAZEN OBJEKT USTVARI DEKA E PRAZEN ZATOA STO IMA GRESKA I DAVA PRAZEN OBJEKT {}



//fetch e funkcija ima implementacija return new PROMISE ako e dobro resolve ako ne reject

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        let result=response.json();
        if(!result){
            console.log("cannot parse to json");
        }
        return result;
      })
      .then(json => console.log(json))








//Promise so Fetch
let url="https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json";

function getDocuments(){
    
}