// API Key

let apiKey = '3911b3545970347c6b98f6c645c609f0';

//  DOM  element

let inputEl = document.getElementById("searchField");
let searchBtn = document.getElementsByClassName("form-btn");
let searchHistory = document.getElementById('search-history');

// getting date

const date = new Date();
var dateString = date.toLocaleDateString();

// URL for current day parameters (city name + weather units of measurements)

let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey;

let forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + '&units=imperial&appid=' + apiKey;

// get search history in local storage
function getSearchHistory() {
    return localStorage.getItem('cityHistory');
}

// Sets the input value in localStorage
function setSearchHistory(city) {
    let history = getSearchHistory()
    let parseHistory;
    if (history) {
        // parse history
        parseHistory = JSON.parse(history);

    } else {
        parseHistory = []
    }

    if (!parseHistory.inludes(city)) {
        parseHistory.shift(city);
        window.localStorage.setItem('cityHistory', JSON.stringify(parseHistory))
    }
}

// Append the search input from localStorage to the cities list
function displayHistory() {
    let history = getSearchHistory()

    if (history) {
        let parseHistory = JSON.parse(history);
        for (let i = 0; i < parseHistory.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = parseHistory[i];
            searchHistory.append(liEl);
        }
    }

}

searchBtn.addeventlistener('click', function(e){
    e.preventDefault();
    
    var city = inputEl.value;

    // set city to searchHistory 

    // display search history, 
    // clear input
    // get weather data.
    
})