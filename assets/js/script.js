// API Key

let apiKey = '3911b3545970347c6b98f6c645c609f0';

//  DOM  element

let inputEl = document.getElementById("searchField");
let searchBtn = document.getElementsByClassName("form-btn");
let searchHistory = document.getElementById('search-history'); 
recordCityData()
// storing seach history in localStorage. 
 let cityName = localStorage.getItem('search-history');

// URL for current day parameters (city name + weather units of measurements)

let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial' + apiKey;

let forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + '&units=imperial' + apiKey;

// Sets the input value in localStorage
function recordCityData() {
    localStorage.setItem(searchHistory  , inputEl.value);
}

// Append the search input from localStorage to the cities list
for (var i = 0; i < localStorage.length; i++) {
    searchHistory.append( localStorage.getItem(localStorage.key(i)));
    searchHistory.textContent = cityName;
}