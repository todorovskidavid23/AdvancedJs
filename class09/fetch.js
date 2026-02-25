//Promise so Fetch
const url="https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json";

function getDocuments(url){
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            resolve(data)
        })
        .catch(err=>{
            reject(err);
        })
    });
}

function getImportantDocuments(documents){
    let importantDocuments=documents.filter(doc=>doc.important);
    return new Promise((resolve,reject)=>{
        if(importantDocuments.length===0){
            reject("There are no important documents")
        }
        setTimeout(function(){
            resolve(importantDocuments);
        },3000);
    });
}

function checkDocuments(documents){
    if(!documents || typeof(documents) !=="object"){
        throw new Error("Problem with document");
    }

    if(documents.length===0){
        throw new Error("There are no documents");
    }
}

function showDocuments(documents){
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} - ${doc.size}MB)`);
    });
}


getDocuments(url)
.then(documents=>{
    console.log(documents);
    
    console.log("We got the documents");
    checkDocuments(documents);
    return getImportantDocuments(documents);//ovde vrakja Promise.. i posle toa ideme .then
})
.then(importantDocs=>{
    showDocuments(importantDocs);    
})
.catch(err=>console.log(err))
//funkcija koja sto se izvrsuva neizvesno MORA DA SE IZVRSI KAKO I DA E
.finally(()=>console.log("We finished handling the documents response"));



//sfatime deka PROMISE async/await

// ecma script 7 ES7

// async/await

//vnatere ke ima long lasting
// await idat vo par, POCEKAJ go toa sto ke stigne od toj api povik
//CEKAJ
//POCEKAJ PAK KAJ DATA
//log idi

function getDataFromFetch(){
    return fetch("url")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}


async function getDataFromFetch(){
    let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
    let data = await response.json();
    console.log(data);
}

getDataFromFetch();