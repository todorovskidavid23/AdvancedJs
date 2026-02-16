let student={
    fullName:"David Todorovski",
    age:23,
    academy:"Avenga Academy-Web developer",
    grades:[6,6,7,9,10,7,8,6,8]
};

let allGradesAboveSeven=[];
let sum=0;
for(let grade of student.grades){
    if(grade>7){
        allGradesAboveSeven.push(grade);
    }
}

for(let grade of allGradesAboveSeven){
    sum+=grade;
}
let average=sum/allGradesAboveSeven.length;
console.log(average);
//with hifger order functions

// let numSum=0;
let averageGrade=student
    .grades
    .filter(grade=>grade>7)
    .reduce((newSum, grade) => newSum+=grade,0)/ allGradesAboveSeven.length
    //agregatorot,ocenkata taa isfiltriranata
    // 0lata e na new sum od kade sakas da pocnes da gi sobiras broevite
    // .map(filteredGrade=>)
console.log(averageGrade);



let averageGradeCustom=student
    .grades
    .filter(grade=>grade>7)
    .reduce(reduceArray,0)/ allGradesAboveSeven.length
    //agregatorot,ocenkata taa isfiltriranata
    // 0lata e na new sum od kade sakas da pocnes da gi sobiras broevite
    // .map(filteredGrade=>)
console.log(averageGrade);
//agregator i sekoj element od nizata
function reduceArray(sum,grade){
    return sum-grade
}



//nizite se referentni tipovi ,o bjekti nizi,
//dodavame uste eden pokazuvac na ista niza.
let numbers=[10,20,30,40,50];

let numbersArr=numbers;

numbersArr.push(60,70,80,90,100);
console.log(numbersArr)
console.log(numbers)


// kopija 
function copyArray(array){
    let copied=[];
    array.forEach(element => copied.push(element));
    return copied;
}

let myCopiedArray=copyArray(numbers);

myCopiedArray.push(200,300,400,500);
console.log("myCopiedArray"+myCopiedArray);
console.log("numbers"+numbers);

numbers.push(3,4,5)
console.log("numbers"+numbers);
console.log("myCopiedArray"+myCopiedArray);
console.log("myCopiedArray"+myCopiedArray);


//Other higher order functions (good to know)

//every() returns Boolean True or False
let ages=[18,20,22,32,28,29,23,33,50,65];
let areAllMature=ages.every(age=>age>=18);
console.log(areAllMature)


//some() returns Boolean True or False
let isSomeoneUnderage = ages.some(age => age < 18);  // true
console.log(isSomeoneUnderage)

//find()
let cities = ['Skopje',"Prague", 'Barcelona', 'Belgrade', 'Ljubljana'];

let skopje= cities.find(city => city === 'Skopje');  // 'Skopje'
console.log(skopje);

//findIndex()
let barcelonaIndex = cities.findIndex(city => city === 'Barcelona'); //2
console.log(barcelonaIndex);


//includes()
let isBarcelonaInArray = cities.includes('Barcelona');  // true
console.log(isBarcelonaInArray);



//flat()
let specialArray = [1, 2, 3,[4,5,[6,7]]];

let flattened = specialArray.flat(2); //do koj level sakas raskapuvanje na niza // [1, 2, 3, 4, 5, 6]
console.log(flattened)


//flatMap()
let cityCharachters=cities.flatMap(city=> city.split(""));//bukvite gi zima za sekoj zbor
console.log(cityCharachters)

//spli niza, join edno nesto
//join()

let joinCharacterCities=cityCharachters.join("")//spoeni mi se tie od gore
console.log(joinCharacterCities)

// let joined=cities.join("-");
// console.log(jou)

//slice(), splice()

let sliced=cities.slice(1,3);//od 1 do end -1 ne go zima 3tiot
console.log(sliced);

//splice()
let spliced=cities.splice(0,2);//od koj index kolku da ti izbrisam
console.log(cities);


//reversed

let reversed = cities.reverse();
console.log(reversed)





//Biten moment na funckii
//Pure Functions
//циста функција , која прави само во функцијата
//ne ja menuvaat na nisto sto  nadvor od niv

function increaseByOne(numbers){
    let result=[];
    for(const number of numbers){
        result.push(number + 1);
    }
    return result;
}

//NOT PURE FUNCTION (IMPURE) - using a variable from the outside scope

let one=1;

function increaseByOneImpure(numbers){
    let result=[];
    for(const number of numbers){
        result.push(number + one);
    }
    return result;
}




//Impure function - mutating data from outside

function increasedByOneImpureFunc(numbers){
    for(let i=0;i<numbers.length;i++){
        numbers[i]+=1;
    }
    return numbers//ne e okej deka istata funckija ja vra
}

//Changing the DOM outside of the function
function increasedByOneInDom(numbers){
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + 1)
        document.getElementById("result").innerHTML += numbers[i] + " ";
  }
  return result;
}

