let countriesData = [];

async function fetchCountries() {
    await fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => (countriesData = data));

    console.log(countriesData);   
    countriesDisplay();
}

function countriesDisplay() {
    document.body.innerHTML = countriesData
    // .filter((country) => country.population > 60000000)
    // .sort((a, b) => b.population - a.population)
    // .slice(0, 10)
    .map(
    (country) =>
    `
    <div class="card">
        <h2>${country.name.common}</h2>
    </div>

    `)
    .join("");
}

window.addEventListener("load", fetchCountries);

