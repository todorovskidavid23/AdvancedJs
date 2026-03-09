//da citame od fajlovi da zavpisuvame vo fajlovi da gi editirame override
//node js instalira biblioteki//imeto na bibliotekata fs
const fs = require('fs').promises;
const { text } = require('stream/consumers');
const fileName="testFile.txt";
//write e async function so await
let writeInFile=(text)=>{
    fs.writeFile(fileName,text,function(param){
        if(param){
            console.log("Error");
            return;
        }
    });
}

let readFromFile= async ()=>{
    let fileContent = await fs.readFile(fileName, { encoding: 'utf-8' });
    console.log(fileContent);
    
}

let appendInFile=(text)=>{
    let content= "\n" + text;
    fs.appendFile(fileName, content, function(param){
        if(param){
            console.log("Error");
            return;
        }
    })
}

module.exports={
    write:writeInFile,
    read:readFromFile,
    append:appendInFile
}


//PackageManagement
//gotovi funkconalnosti
//NPM Node Package Management 
//floating messages nmp toastify kako pop up 
//pacgane .json

//cd npm: npm init
