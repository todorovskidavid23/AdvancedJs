// function sumTo(number){
//     if(number===0){
//         return 0;
//     }
//     return number+sumTo(number-1);
// }
// console.log(sumTo(20));

function sumTo(number) {
    if (number === 0) {
        return 0;
    }
    
    // Рекурзивен повик за претходниот број
    let previousSum = sumTo(number - 1);
    
    // Испечатете го бројот кој се додава
    if (number === 1) {
        console.log(`${number}`);
    } else {
        console.log(`${number} + `);
    }

    return number + previousSum;
}

console.log("\nSum:", sumTo(20));

//globalna varijalba ne ja ja pristapuva vo podolnite

//najdolnite let  ne ide nagore
