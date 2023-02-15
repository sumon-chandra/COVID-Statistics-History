// ************ COVID Statistics ***********************
// ** Get the Countries
const countryOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2aca2883ccmsha30c691d132f478p12d213jsnd28011583fd9",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

fetch("https://covid-193.p.rapidapi.com/countries", countryOption)
  .then((response) => response.json())
  .then((data) => getCountries(data.response))
  .catch((err) => console.error(err));

const countriesDiv = document.getElementById("countries");

function getCountries(countries) {
  countries.map((country) => {
    const p = document.createElement("p");
    p.textContent = country;
    p.addEventListener("click", (e) => countryName(e));
    p.className =
      "my-1 country py-1 border-b-4 border-white hover:bg-white cursor-pointer";
    countriesDiv.appendChild(p);
  });
}

// * Get the statistics for a country
const statsOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2aca2883ccmsha30c691d132f478p12d213jsnd28011583fd9",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};
const demoName = "Bangladesh";
function countryName(e) {
  const name = e.target.textContent;
  fetch(
    `https://covid-193.p.rapidapi.com/statistics?country=${name}`,
    statsOption
  )
    .then((response) => response.json())
    .then((response) => getStatistics(response.response[0]))
    .catch((err) => console.error(err));
}

function getStatistics(statistics) {
  const continent = document.getElementById("continent");
  const country = document.getElementById("country");
  const population = document.getElementById("population");
  const caseNew = document.getElementById("caseNew");
  const caseActive = document.getElementById("caseActive");
  const caseRecovered = document.getElementById("caseRecovered");
  const caseTotal = document.getElementById("caseTotal");
  const deathNew = document.getElementById("deathNew");
  const deathTotal = document.getElementById("deathTotal");
  const testTotal = document.getElementById("testTotal");
  const headerCountry = document.getElementById("headerCountry");
  headerCountry.textContent = statistics.country;
  continent.textContent = statistics.continent;
  country.textContent = statistics.country;
  population.textContent = statistics.population;
  caseNew.textContent =
    statistics.cases.new === null ? 0 : statistics.cases.new;
  caseActive.textContent =
    statistics.cases.active === null ? 0 : statistics.cases.active;
  caseRecovered.textContent =
    statistics.cases.recovered === null ? 0 : statistics.cases.recovered;
  caseTotal.textContent =
    statistics.cases.total === null ? 0 : statistics.cases.total;
  deathNew.textContent =
    statistics.deaths.new === null ? 0 : statistics.deaths.new;
  deathTotal.textContent =
    statistics.deaths.total === null ? 0 : statistics.deaths.total;
  testTotal.textContent = statistics.tests.total;
}
