// API Key

let apiKey = '3911b3545970347c6b98f6c645c609f0';

//  DOM  element

let inputEl = document.getElementById("searchField");
let searchBtn = document.getElementById("form-btn");
let searchHistory = document.getElementById('search-history');
let cityDate = document.getElementById('city-date');
let iconEl = document.getElementById('icon');
let tempEl = document.getElementById('temp');
let windEl = document.getElementById('wind');
let humidityEl = document.getElementById('humidity');
let forecastDate = document.getElementById('forecast-date');
let tempForecast = document.getElementById('forecast-temp');
let windForecast = document.getElementById('forecast-wind');
let forecastHumidity = document.getElementById('forecast-humidity');

// getting date

const date = new Date();
var dateString = date.toLocaleDateString();

// URL for current day parameters (city name + weather units of measurements)

function getWeather(city) {
let geoCodingUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+ city + '&appid=' + apiKey; 
    fetch(geoCodingUrl)
    .then(function (response){
        return response.json(); 
    })
    .then (function(data){
        console.log(data)
        let lat = data[0].lat
        let lon =  data[0].lon;
        getCurrentWeather(lon, lat);
        getForecast(lon, lat);
    })
}

function getCurrentWeather(longitude, latitude){
    let currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=imperial&appid='  + apiKey;

    fetch(currentWeatherUrl)
    .then(function (response){
        return response.json(); 
    })
    .then (function(data){
        console.log(data);
        let tempData = data.main.temp;
        let windData = data.wind.speed;
        let humidityData = data.main.humidity;
        let cityAndDateData = data.name + ' ('+ dateString + ')';
        cityDate.textContent = cityAndDateData;
        tempEl.textContent = 'Temp: ' + tempData + ' °F';
        windEl.textContent = 'Wind: ' + windData + ' MPH';
        humidityEl.textContent = 'Humidity: ' + humidityData + ' %';
    })
} 

function getForecast(longitude, latitude){
    let forecastWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&units=imperial&appid='  + apiKey;

    fetch(forecastWeatherUrl)
    .then(function (response){
        return response.json(); 
    })
    .then (function(data){
        console.log(data)
        let dateData = data.list[8]['dt_txt'].split(' ')[0];
        forecastDate.textContent = dateData;
        
        console.log(dateData) 
        let weatherIcon = data.list[8].weather[0].icon;
        let weatherIconLink = 'https://openweathermap.org/img/w/' + weatherIcon + '.png';
            iconEl.src = weatherIconLink;
            iconEl.textContent = weatherIconLink;
        let forecastTemp =  data.list[8].main.temp;
            tempForecast.textContent = 'Temp: ' + forecastTemp + ' °F';
        let forecastWind = data.list[8].wind.speed;
            windForecast.textContent = 'wind' + forecastWind + 'MPH';
        let humidityForecast = data.list[8].main.humidity;
        forecastHumidity.textContent = 'Humidity' + humidityForecast + '%'
            
        
        

console.log(weatherIconLink);
    })

}


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
        
        console.log('History exist'+ history)
        parseHistory = JSON.parse(history);
    } else {

        console.log('No history ' + history)

        parseHistory = []
    }

    if (!parseHistory.includes(city)) {
        parseHistory.unshift(city);
        window.localStorage.setItem('cityHistory', JSON.stringify(parseHistory))
    }
}

// Append the search input from localStorage to the cities list
function displayHistory() {
    let history = getSearchHistory()

    if (history) {
        searchHistory.innerHTML = 'Search History'
        let parseHistory = JSON.parse(history);
        for (let i = 0; i < parseHistory.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = parseHistory[i];
            searchHistory.append(liEl);
        }
    }
    inputEl.value = '';
}
console.log(searchBtn)
searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    var city = inputEl.value;
    setSearchHistory(city);
    displayHistory(); 
    
    getWeather(city);
})

displayHistory();

