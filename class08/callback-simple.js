

let first = (callback) =>{
    setTimeout(function(){
        console.log("First Thing");
        callback();
    }, 1000)
}

let second = () => {
    console.log("Second Thing");
    
}


// first(second);
// second();

//celo vreme se povikuva
let intervalId = setInterval(function(){
    console.log("Hello there!");

},1000)

document.getElementById("btn")
    .addEventListener("click",function(){
        clearInterval(intervalId);
    })