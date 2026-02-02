
let color = document.getElementById('color');
let fontSize = document.getElementById('font-size');
let text = document.getElementById('text');
let btn=document.getElementById('btn');

let resultDiv=document.getElementById("title");

btn.addEventListener("click",function(){

    // let header=document.createElement("h1");
    resultDiv.innerHTML=`<h1 
    style="font-size:${fontSize.value}px; 
    color:${color.value}">${text.value}
    </h1>`

});
