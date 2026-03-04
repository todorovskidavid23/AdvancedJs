//getters i //seters
//sekoj klasa moze da si ima svoi getteri i setteri
//mozeme dopolnitelna logika na niv TIE SE METODI koi to imaat
//ne se povikuvaat vo istancata,
//bez zagradi za povivk (myelectriccar.work) BEZZ ()

//metodi ili funkcii sto go endlaat zimanje i setiranje na vrednosta na nekoe property

//So golema Bukva sekogas Classes
//metodi na klasata PER PROPERTY;
//sekoe property ima getter i setter;
//vo pozadina site si imaat;

class Student{
    constructor(id, fName, lName, age, academyName){
        this.id=id;
        this.fName=fName;
        this.lName=lName;
        this.age=age;
        this.academyName=academyName;
    }

    //funkcii i metodi specijalni metodi PER PROPERTY 
    //SETIRAME VREDNOST I DA SE PROCITA TOA PROPERTY// se ptistapuva property za da se najde vresnost
    //geterot na age vo david.age
    //a kade sto mu dodava  se setter
    //da se vrati kako resultat
    //vo site klasi o bjekti si imam getter setter 
    //this._age = ne moze da se vika getterot iseterrot so propertyto 
    //da se zeme negov dvojnik za ova nesto tretiraj go getterot i seterrot
    get age(){
        this._age>18 ?
            console.log("This Student is adult") : 
            console.log("This student is minor");
        return this._age;
    }

    //ova si raboti vo pozadina;
    // get age(){
    //     return this._age;
    // }


    set age(value){
        if(value<=0){
            throw new Error("Cannot assign value below or equal to 0 for property Age");
        }
        this._age=value;
    }

}

let david=new Student(1,"David","Todorovski",23,"Avenga Academy - Web Dev");
console.log(david.age);
console.log(david);


let mario=new Student(2,"Mario","Simonovski",34,"Academy Avenga - Web Dev");
console.log(mario.age);//ne se vika metoda () so zagradi 
//nie custom da si gi koristime vo setterot

//metodi funckii na edna klasa sto se odnesuvaat na edna klasa za sekoe property vo klasata
//tie vo pozadina si se formirani
//getter i setter


console.log(david instanceof Student);//dali e istanca od ovaa klasa


//local storage vo baza
//Application sekoj site ime local storage session storage
//kolacinjata ovde gi zacuvuvaat Cookies 
//marketiranje
//Local Storage na ovoj Tab kade sto sme

//fetch vo then si rabotime
//cela data se zima pak se povikuva kon api
//nacin nie da ne go zamarame API-to 
//na prv povik si se zacuvuvaat kaj nas u browser od lokalen storage i citanje
//dve metodi
//setItem i get Item

                    //kluc na koja data da se cuva ne samo ford samo kako objekt parsiranje vo JSON objekt
localStorage.setItem("ford-car",JSON.stringify(ford));
localStorage.setItem("toyota-car",JSON.stringify(toyota));
// stringify


//mora da se isprasira vo OBJEKT
let fordObj=JSON.parse(localStorage.getItem("ford-car"));
console.log(fordObj);


//prvo vikanje na api vo local storage




//struktura so servie za produkti service za valudacija,
//implementirame softver modularno 
//DOM BTN vo script
//models
//MEODI NA OVAA BIZNIS LOGIKA
//product povik do api zacuvuvanje 
//say service say hello say dppfby
//script type="module";

//destrukcija na objekt
//script.kjs file import{sayHrllo, sayGoodby} from "drig file"


//priduct servise ima fetch
//filtersi sve toa vo productt


//ako imam export kje si zanm deka moze so import da se dodade