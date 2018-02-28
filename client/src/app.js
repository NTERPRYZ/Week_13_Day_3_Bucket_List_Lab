const app = function(){
  const url    = "https://restcountries.eu/rest/v2/all"
  const select = document.getElementById('country-select');
    makeRequest(url,requestComplete)
}

const makeRequest = function (url, callback) {
 const request    = new XMLHttpRequest();
 request.open("GET", url);
 request.addEventListener("load", callback);
 request.send(); //sending request to the server

}

const requestComplete = function () {
 if(this.status !== 200) return;  //404 cant find it, 500 server error, 200 everything ok and carries on. this.status same as saying request.status
 const jsonString = this.responseText;
 const countries  = JSON.parse(jsonString);
 populateList(countries);
 console.log(countries);
}

const populateList = function(countries){
  const select     = document.getElementById("country-select")

  countries.forEach(function(country, index){
    const option     = document.createElement("option");
    option.innerText = country.name;
    option.value     = index
    select.appendChild(option);
  })

  const getCountrySelectClicked = function(){
    const index = 0
    const selectedCountry = countries[this.value]

    const countryName = document.getElementById('country-name')
    countryName.innerText = selectedCountry.name

    const countryFlag = document.getElementById('country-flag')
    countryFlag.src = selectedCountry.flag

    const countryCapital = document.getElementById('country-capital')
    countryCapital.innerText = "Capital City: " + selectedCountry.capital

    const countryPopulation = document.getElementById('country-population')
    countryPopulation.innerText = "Population: " + selectedCountry.population.toLocaleString()

    const list = document.getElementById('list')
    list.innerText = (index+1) + ".  " + selectedCountry.name
    save(list);
  }
  select.addEventListener('change', getCountrySelectClicked);
}

document.addEventListener('DOMContentLoaded', app);
