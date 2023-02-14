// ************ COVID Statistics ***********************
// ** Get the Countries
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2aca2883ccmsha30c691d132f478p12d213jsnd28011583fd9",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

fetch("https://covid-193.p.rapidapi.com/countries", options)
  .then((response) => response.json())
  .then((data) => getCountries(data.response))
  .catch((err) => console.error(err));

const countriesDiv = document.getElementById("countries");

function getCountries(countries) {
  countries.map((country) => {
    const p = document.createElement("p");
    p.textContent = country;
    p.className =
      "my-1 py-1 border-b-4 border-white hover:bg-white cursor-pointer";
    countriesDiv.appendChild(p);
  });
}
