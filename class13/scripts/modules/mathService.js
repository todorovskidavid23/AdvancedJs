//moduli sto kje bidat sklopeni

//da vneseme zavisnnotsi mozeme import ili export na drugo mesto

export function sum(a,b){
    return a+b;
}
export function difference(a,b){
    return a-b;
}

export function multiply(a,b){
    return a*b;
}

export function division(a,b){
    if(b===0){
        throw new Error("DivideByZeroException: Cannot devide by zero!");
    }
    return a/b;
}


//ako imame povekje funkcii bez ezport i posle toa da imame export defualt

// export default{
//     sum: sum,
//     difference: difference,
//     multiply: multiply,
//     division: division,
// }