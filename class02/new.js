// let array = [];
// for (let i = 1; i <= 1000; i++) {
//   if (i % 3 === 0) {
//     array.push(i);
//   }
// }


function divisibleBy3() {
  let array = [];

  for (let i = 1; i <= 1000; i++) {
    let sum = 0;
    let num = i;

    while (num > 0) {
      sum =sum + num % 10;
      num = Math.floor(num / 10);
    }

    if (sum % 3 === 0) {
      array.push(i);
    }
  }

  return array;
}

// function divisibleBy3() {
//   let array = [];

//   for (let i = 1; i <= 1000; i++) {
//     if (i % 3 === 0) {
//       array.push(i);
//     }
//   }

//   return array;
// }

console.log(divisibleBy3());

function divisibleBy4() {
  let array = [];

  for (let i = 1; i <= 1000; i++) {
    if (i % 4 === 0) {
      array.push(i);
    }
  }
  
  return array;
}

console.log(divisibleBy4());

function end1() {
  let array = [];

  for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 1) {
      array.push(i);
    }
  }
  
  return array;
}

console.log(end1());



// create a function that cleans an array of any avalues and leaves only STRINGs

function strings(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let element=arr[i];
    if (typeof element === "string") {
      result.push(element);
    }
  }

  return result;
}

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

console.log(strings(test));



// Create a function that cleans an array of any values and leaves only NUMBERS

function numbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let element=arr[i];
    if (typeof element === "number" && !Number.isNaN(element)) {
      result.push(arr[i]);
    }
  }

  return result;
}

let test2 = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

console.log(numbers(test2));


// Create a function that cleans undefined, null, NaN, and "" and leaves all other values
function clean(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if(element || element===false){
      result.push(element);
    }
    // if (element !== undefined && element !== null && element !== "" && !Number.isNaN(element)) {
    //   result.push(element);
    // }
  }

  return result;
}

let test3 = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

console.log(clean(test3));














// window,document,body itn...






// metod na toj objekt

function Random(){
  return Math.floor(Math.random() * 256);
}

function changeBackgroundColor() {
    let red = Random();
    let green = Random();
    let blue = Random();
  //interpolacija
    let bgColor = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.backgroundColor = bgColor;
    document.getElementById('rgbValue').textContent = bgColor;

    console.log(`New background color: ${bgColor}`);
}

// Optional: Change color on page load
// document.body.onload = changeBackgroundColor;
// document.body.addEventListener('load', changeBackgroundColor);

// let button=document.getElementById("btn");
// button.addEventListener("load",changeBackgroundColor())

document.body.addEventListener('load', changeBackgroundColor());
