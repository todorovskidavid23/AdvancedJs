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

//moj zaklucok tamu kade sto imame then imame await zatoa sto vrakja promise!
async function showImportantsOnlyDocs(){
    let startTime=new Date().getTime();
    try {
        //se sto ocekuvam da se izvrsi uspesno  go stavame vo try blokot
        let documents= await getDocuments(url);//go cekame promisot 
        checkDocuments(documents);
        let importantDocs= await getImportantDocuments(documents);
        showDocuments(importantDocs);
    }catch(err){//sekoe neocekuvano scenario go hendlame vo catch blok
        console.log("Error occured!" + err);
        
    }
    finally{
        let endTime=(new Date().getTime()-startTime)/1000;
        console.log(`Done in ${endTime} sec`);
        
    }

}

showImportantsOnlyDocs();


async function sayHello(){
    console.log("Hello");
    
}

//await go cekame kafeto.


// domasnoto so filter ama so async await

async function newa() {
    let test=await fetch(url);
    let test1=await test.json();
    console.log("Test");
    console.log(test1); 
}
newa();

//AWAIT SAMO VO async FUNKCIJA
