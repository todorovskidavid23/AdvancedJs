// 1. Select all the html elements needed for the implemntation
// 2. Implement function to fetch data from API (provide fields what kind of data do we need!)
// 3. Implement function that will display/hide spinner
// 4. Implement function that will display data in Cards
// 5. Implement function that will display data in Table
// 6. Implement 5 event listeners for the five buttons
// 6.1 Search, Reset, All from Europe, All neigbours MKD, MKD
// 7. Implement constructor function with props only needed for the data to be displayed

//2.
const url="https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region"
//1.
let html={
    searchInput: document.getElementById("inpSearch"),
    searchBtn: document.getElementById("btnSearch"),
    resetBtn: document.getElementById("btnReset"),
    europeBtn: document.getElementById("btnAllInEurope"),
    neigboursBtn: document.getElementById("btnNeighbours"),
    macedoniaBtn: document.getElementById("btnMacedonia"),
    spinner: document.getElementById("spinner"),
    cardContainer: document.getElementById("resultContainer").firstElementChild,

};

// function toggleSpinner(){
//     console.log(html.spinner.classList);
//     // html.spinner.classList.toggle("d-none");//toggle site klasi gi dava calssList, ime na kalsa sto saka da pravi toggle ako SWITCH.
//     //TOGGLE i isto kako ova dole, ama samo sto nie ja kontrolirame.
// }

//3.

function toggleSpinner(showSpinner){
    if(showSpinner){
        html.spinner.classList.remove("d-none")
    }else{
         html.spinner.classList.add("d-none")
    }
}





function getData(url){
    return fetch(url)
    .then(response=>response.json());
    
}

getData(url)
    .then(countries=>{
        console.log(countries);//za da si gledame vo console
        countries.forEach(country => {
            html.cardContainer.innerHTML+=createCard(country);
        });
        toggleSpinner(false);
    })
    .catch(err=>{
        toggleSpinner(false);
        html.cardContainer.innerHTML="<div class='row'> <p class='text-danger'>Oops something went wrong</p></div>"

    })

function createCard(country){
    return `
    
        <div class="col-4">
            <div class="card" style="width: 25rem;">
            <img class="card-img-top" src="${country.flags.png}" alt="${country.flags.alt}">
                <div class="card-body">
                    <h5 class="card-title">${country.name.common}</h5>
                    <p class="card-text">${country.name.common} is a country with a population of ${country.population} citizens and the capital city is ${country.capital[0]}</p>
                    <a href="https://en.wikipedia.org/wiki/${country.name.common}" class="btn btn-primary" target="_blank" >Wikipedia</a>
                </div>
            </div>
        <div>
    
    `;
}



// html.searchBtn.addEventListener("click", function() {
//     const searchValue = html.searchInput.value.trim().toLowerCase();
//     if(searchValue){
//         toggleSpinner(true);
//         getData(`https://restcountries.com/v3.1/name/${searchValue}?fullText=false&fields=name,capital,population,flags`)
//             .then(countries => {
//                 html.cardContainer.innerHTML = "";
//                 countries.forEach(c => {
//                     html.cardContainer.innerHTML += createCard(c);
//                 });
//                 toggleSpinner(false);
//             }).catch(err => {
//                 html.cardContainer.innerHTML = "<p class='text-danger'>Country not found!</p>";
//                 toggleSpinner(false);
//             });
//     }

//     else {
//         // Ако полето е празно, прикажи ги сите држави
//         getData(url)  // url е https://restcountries.com/v3.1/all?fields=name,capital,population,flags
//             .then(countries => {
//                 html.cardContainer.innerHTML = "";
//                 countries.forEach(c => {
//                     html.cardContainer.innerHTML += createCard(c);
//                 });
//                 toggleSpinner(false);
//             });
//     }
    
// });

//RESET
// html.resetBtn.addEventListener("click", () => {
//     html.searchInput.value = ""; // чисти го полето за search
//     html.cardContainer.innerHTML = ""; // чисти ги резултатите
//     toggleSpinner(true);
//     getData(url) // fetch на сите држави
//         .then(countries => {
//             countries.forEach(c => html.cardContainer.innerHTML += createCard(c));
//             toggleSpinner(false);
//         });
// });



html.europeBtn.addEventListener("click", function(){
     
    html.cardContainer.innerHTML="";
    toggleSpinner(true);


    getData(url)
        .then(countries=>{
            toggleSpinner(false);
            let filterCountries=countries
                .filter(c=>c.region==="Europe");

            filterCountries.forEach(country=>{
                html.cardContainer.innerHTML+=createCard(country)
            })
        })



})