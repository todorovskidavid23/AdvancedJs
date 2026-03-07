// Link to the country's Wikipedia page "Open on Wikipedia" (https://en.wikipedia.org/wiki/< country_name>)
// The API for countries is: https://restcountries.com/


let searchBtn=document.getElementById("btnSearch");
let resetBtn=document.getElementById("btnReset");
let allEuropeBtn=document.getElementById("btnAllInEurope");
let neigboursBtn=document.getElementById("btnNeighbours");
let macedoniaBtn=document.getElementById("btnMacedonia");
let spinner=document.getElementById("spinner");
let result=document.getElementById("resultContainer").firstElementChild;
let inpSearch = document.getElementById("inpSearch");
let searchForm = document.getElementById("searchForm");


const url = "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,borders,cca3";

function toggleSpinner(showSpinner){
    if(showSpinner){
        spinner.classList.remove("d-none");
    }else{
        spinner.classList.add("d-none");
    }
}


// toggleSpinner(true)
function getData(url){
    return fetch(url)
        .then(response=>response.json());
}

getData(url)
    .then(data=>{
        console.log(data);
        data.forEach(country => {
            result.innerHTML+=createCard(country);
        });
        toggleSpinner(false);
    }).catch(err => {
        toggleSpinner(false);
        html.cardContainer.innerHTML = "<div class='row'><h3 class='text-danger'>Ooops something went wrong! Please try again later!</h3>"
    });


function createCard(country) {
    return `
        <div class="col-4 mb-3">
            <div class="card" style="width: 25rem; height: 100%; display: flex; flex-direction: column;">
                <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}" style="height: 250px; object-fit: cover; object-position: center;">
                <div class="card-body" style="display: flex; flex-direction: column; flex-grow: 1;">
                    <h5 class="card-title">${country.name.common}</h5>
                    <p class="card-text" style="flex-grow: 1;">${country.name.common} is a country with a population of ${country.population} citizens and the capital city is ${country.capital[0]}</p>
                    <a href="https://en.wikipedia.org/wiki/${country.name.common}" class="btn btn-primary" target="_blank">Wikipedia</a>
                </div>
            </div>
        </div>
    `;
}


allEuropeBtn.addEventListener("click",function(){

    result.innerHTML="";
    toggleSpinner(true);

    getData(url)
    .then(data=>{
        toggleSpinner(false);
        let filteredCountries=data
            .filter(c=>c.region==="Europe");
        filteredCountries.forEach(country => {
            result.innerHTML+=createCard(country);
        });
    });
});


neigboursBtn.addEventListener("click",function(){
    result.innerHTML="";
    toggleSpinner(true);

    getData(url)
    .then(data=>{
        toggleSpinner(false);
        let filteredCountries=data
            .filter(c=>c.borders.includes("MKD"));
        filteredCountries.forEach(country => {
            result.innerHTML+=createCard(country);
        });
    });
});


macedoniaBtn.addEventListener("click",function(){
    result.innerHTML="";
    toggleSpinner(true);

    getData(url)
        .then(data=>{
            toggleSpinner(false);
            let macedonia=data
                .filter(c=>c.name.common==="North Macedonia" || c.name.common==="Macedonia");
            macedonia.forEach(country => {
                result.innerHTML+=createCard(country);
            });
        });
});

searchBtn.addEventListener("click", function(){
    let searchTerm = inpSearch.value.trim();
    result.innerHTML="";
    toggleSpinner(true);

    getData(url)
        .then(data=>{
            toggleSpinner(false);
            let filteredCountries = data.filter(c => c.name.common.toLowerCase().includes(searchTerm.toLowerCase()));
            filteredCountries.forEach(country => {
                result.innerHTML += createCard(country);
            });
        }).catch(err => {
            toggleSpinner(false);
            result.innerHTML = "<div class='row'><h3 class='text-danger'>Ooops something went wrong! Please try again later!</h3></div>";
        });
});

resetBtn.addEventListener("click", function(){
    inpSearch.value = "";
    result.innerHTML="";
    toggleSpinner(true);

    getData(url)
        .then(data=>{
            toggleSpinner(false);
            data.forEach(country => {
                result.innerHTML += createCard(country);
            });
        }).catch(err => {
            toggleSpinner(false);
            result.innerHTML = "<div class='row'><h3 class='text-danger'>Ooops something went wrong! Please try again later!</h3></div>";
        });
});