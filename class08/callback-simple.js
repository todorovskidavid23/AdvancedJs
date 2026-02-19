

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




function first(){
  setTimeout(() => console.log("First done"), 1000);
}

function second(){
  console.log("Second");
}

first();
second();
// Second
// First done



function first(callback){
  setTimeout(() => {
    console.log("First done");
    callback();
  }, 1000);
}

function second(){
  console.log("Second");
}

first(second);
// First done
// Second