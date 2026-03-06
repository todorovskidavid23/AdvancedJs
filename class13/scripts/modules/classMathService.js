// export defualt ima samo eden export samo Math i nisto drugo ne zememe dopolnitelno
//imeto samo moze da si go davame deka imame  staveno DEFAULT=> deka edna edinstvena bez {  } kade sto pravime import na nestoto
export class Math{
    
    static PI=3.14;

    static sum(a,b){
        return a+b;
    }
    static difference(a,b){
        return a-b;
    }

    static multiply(a,b){
        return a*b;
    }

    static division(a,b){
        if(b===0){
            throw new Error("DivideByZeroException: Cannot devide by zero!");
        }
        return a/b;
    }
}