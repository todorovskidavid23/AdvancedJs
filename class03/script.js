//jscon
///////////////////////////////////////////////////////////
// let studentJson=`{

//     "studentName":"David",
//     "assistant":"ChatGpt",
//     "students":[
//         "Mario",
//         "Dimitar",
//         "Ognen",
//         "Damjan"
//     ],
//     "academy":"Avenga Academy"


// }`

// console.log(studentJson);
// console.log(typeof studentJson);
// //string vo objekt
// let studentObject=JSON.parse(studentJson);

// console.log(studentObject)
// console.log(studentObject.students[0]);

// //od objekt vo string;
// studentObject.age=32;

// let studentString=JSON.stringify(studentObject);
// console.log(studentString);
///////////////////////////////////////////////////////////////

// api treba da ni dadem json string

//Get data from API using Plain JS (the very old method)

// let btn=document.getElementById("sendRequest");
// btn.addEventListener("click",function(){

// });


// document.getElementById("sendRequest")
//         .addEventListener("click",function(){

//             let xhr=new XMLHttpRequest();
//             xhr.onload = function(){
//                 console.log("Request is sent!");
//                 if(xhr.status>=200 && xhr.status<300){
//                     console.log("Request successfull!");
//                     let objectResponse=JSON.parse(xhr.response);
//                     console.log(objectResponse);
//                 }else{
//                     console.log(xhr.responseText);
//                 }

//             }

//             xhr.open("GET","https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json");
//             xhr.send();

//             // povicite se asinhroni
//     });



//Get data from API using JQuery AJAX

// let btn=$("#sendRequest");
// btn.on("click",function(){

//     $.ajax({
//         url:"https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json",
//         success:function(data){
//             console.log(data);
//             let dataObject=JSON.parse(data);//go pretvarame od string vo objekt
//             console.log(dataObject)
//         },

//         error:function(error){
//             console.log(error);
//         }

    
//     })

// })

//Get data from API using plain JS with Fetch


document.getElementById("sendRequest")
    .addEventListener("click",function(){
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then(function(response){
                    // console.log(response);//dobivme
                    return response.json();//metoda sto e 
                })
                .then(function(data){
                    // console.log(data);//dobivme response so serverot
                    let list=document.getElementById("todos");
                    list.innerHTML="";//da se iscisti 
                    for (const todo of data) {
                        list.innerHTML += `<li> ${todo.title} | Completed:${todo.completed}</li>`
                    }

                })
                .catch(function(error){
                    console.log(error,responseText)
                })

    })

// https://jsonplaceholder.typicode.com/todos
