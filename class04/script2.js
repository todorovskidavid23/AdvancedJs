// https://aa-codecademy.github.io/mkwd14-03-ajs-and-ai/

let sizeInput = document.getElementById("size");
let colorInput = document.getElementById("color");
let button = document.getElementById("change-btn");
let header = document.querySelector("h1");

let changeTextColor1 = function(element, color) {
    if (color) {
        element.style.color = color;
    } else {
        element.style.color = "black";
    }
};

let changeTextSize1 = function(element, textSize) {
    if (textSize) {
        element.style.fontSize = textSize + "px";
    } else {
        element.style.fontSize = "24px";
    }

};


button.addEventListener("click", function() {
    let textSize;
    if (sizeInput.value) {
        textSize = sizeInput.value;
    } else {
        textSize = 24;
    }

    let color;
    if (colorInput.value) {
        color = colorInput.value;
    } else {
        color = "black";
    }
    changeTextSize1(header, textSize);
    changeTextColor1(header, color);
});