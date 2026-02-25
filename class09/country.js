

const url = "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region";


async function getAllCountryNames() {
    let response = await fetch(url);
    let countries = await response.json();
    countries.forEach(country => {
        let name = country.name.common;
        let population = country.population;
        console.log(`Country name ${name} - Population: ${population}`);
    });
}

getAllCountryNames();

async function getMacedonia() {
    let response = await fetch(url);
    let countries = await response.json();
    console.log(countries);
    
    let macedonia = countries.filter(m => m.name.common === "North Macedonia");

    if (macedonia.length === 0) {
        console.log("North Macedonia not found");
        return null;
    }

    macedonia.map(country => {
        let name = country.name.common;
        let population=country.population
        console.log(`${name} Population: ${population}`);
    });

}

getMacedonia();