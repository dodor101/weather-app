// API Key

let apiKey = '3911b3545970347c6b98f6c645c609f0';

//  DOM  element

let inputEl = document.getElementById('searchField');
let searchBtn = document.getElementById('form-btn');
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

// load day 2 day 2 elements;
let forecastDate2 = document.getElementById('forecast-date2');
let icon2 = document.getElementById('icon2');
let temp2 = document.getElementById('temp2');
let wind2 = document.getElementById('wind2');
let humidity2 = document.getElementById('humidity2');

// load day 3 elements
let forecastDate3 = document.getElementById('forecast-date3');
let icon3 = document.getElementById('icon3');
let temp3 = document.getElementById('temp3');
let wind3 = document.getElementById('wind3');
let humidity3 = document.getElementById('humidity3');

// load day 4 elements
let forecastDate4 = document.getElementById('forecast-date4');
let icon4 = document.getElementById('icon4');
let temp4 = document.getElementById('temp4');
let wind4 = document.getElementById('wind4');
let humidity4 = document.getElementById('humidity4');

// load day 5 elements
let forecastDate5 = document.getElementById('forecast-date5');
let icon5 = document.getElementById('icon5');
let temp5 = document.getElementById('temp5');
let wind5 = document.getElementById('wind5');
let humidity5 = document.getElementById('humidity5');

// getting date
const date = new Date();
var dateString = date.toLocaleDateString();

// URL for current day parameters (city name + weather units of measurements)
function getWeather(city) {
  let geoCodingUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + apiKey;
  fetch(geoCodingUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let lat = data[0].lat;
      let lon = data[0].lon;
      getCurrentWeather(lon, lat);
      getForecast(lon, lat);
    });
}

function getCurrentWeather(longitude, latitude) {
  let currentWeatherUrl =
    'https://api.openweathermap.org/data/2.5/weather?lat=' +
    latitude +
    '&lon=' +
    longitude +
    '&units=imperial&appid=' +
    apiKey;

  fetch(currentWeatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let tempData = data.main.temp;
      let windData = data.wind.speed;
      let humidityData = data.main.humidity;
      let cityAndDateData = data.name + ' (' + dateString + ')';
      cityDate.textContent = cityAndDateData;
      tempEl.textContent = 'Temp: ' + tempData + ' °F';
      windEl.textContent = 'Wind: ' + windData + ' MPH';
      humidityEl.textContent = 'Humidity: ' + humidityData + ' %';
    });
}
// get forecast function;
function getForecast(longitude, latitude) {
  let forecastWeatherUrl =
    'https://api.openweathermap.org/data/2.5/forecast?lat=' +
    latitude +
    '&lon=' +
    longitude +
    '&units=imperial&appid=' +
    apiKey;

  fetch(forecastWeatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let dateData = data.list[8]['dt_txt'].split(' ')[0];
      forecastDate.textContent = dateData;

      console.log(dateData);
      let weatherIcon = data.list[8].weather[0].icon;
      let weatherIconLink = 'https://openweathermap.org/img/w/' + weatherIcon + '.png';
      iconEl.src = weatherIconLink;
      iconEl.textContent = weatherIconLink;
      let forecastTemp = data.list[8].main.temp;
      tempForecast.textContent = 'Temp: ' + forecastTemp + ' °F';
      let forecastWind = data.list[8].wind.speed;
      windForecast.textContent = 'wind: ' + forecastWind + 'MPH';
      let humidityForecast = data.list[8].main.humidity;
      forecastHumidity.textContent = 'Humidity: ' + humidityForecast + '%';
      // log day 2 weather forecast
      let dateData2 = data.list[10]['dt_txt'].split(' ')[0];
      forecastDate2.textContent = dateData2;

      let weatherIcon2 = data.list[10].weather[0].icon;
      let weatherIconLink2 = 'https://openweathermap.org/img/w/' + weatherIcon2 + '.png';
      icon2.src = weatherIconLink2;
      icon2.textContent = weatherIconLink2;

      let forecastTemp2 = data.list[10].main.temp;
      temp2.textContent = 'Temp: ' + forecastTemp2 + ' °F';
      let forecastWind2 = data.list[10].wind.speed;
      wind2.textContent = 'wind: ' + forecastWind2 + 'MPH';
      let humidityForecast2 = data.list[10].main.humidity;
      humidity2.textContent = 'Humidity: ' + humidityForecast2 + '%';
      // log day 3 weather forecast
      let dateData3 = data.list[20]['dt_txt'].split(' ')[0];
      forecastDate3.textContent = dateData3;

      let weatherIcon3 = data.list[20].weather[0].icon;
      let weatherIconLink3 = 'https://openweathermap.org/img/w/' + weatherIcon3 + '.png';
      icon3.src = weatherIconLink3;

      let forecastTemp3 = data.list[20].main.temp;
      temp3.textContent = 'Temp: ' + forecastTemp3 + ' °F';
      let forecastWind3 = data.list[20].wind.speed;
      wind3.textContent = 'wind: ' + forecastWind3 + 'MPH';
      let humidityForecast3 = data.list[20].main.humidity;
      humidity3.textContent = 'Humidity: ' + humidityForecast3 + '%';
      // log day 4 weather forecast
      let dateData4 = data.list[26]['dt_txt'].split(' ')[0];
      forecastDate4.textContent = dateData4;

      let weatherIcon4 = data.list[26].weather[0].icon;
      let weatherIconLink4 = 'https://openweathermap.org/img/w/' + weatherIcon4 + '.png';
      icon4.src = weatherIconLink4;

      let forecastTemp4 = data.list[26].main.temp;
      temp4.textContent = 'Temp: ' + forecastTemp4 + ' °F';
      let forecastWind4 = data.list[26].wind.speed;
      wind4.textContent = 'wind: ' + forecastWind4 + 'MPH';
      let humidityForecast4 = data.list[26].main.humidity;
      humidity4.textContent = 'Humidity: ' + humidityForecast4 + '%';
      // log day 5 weather forecast

      let dateData5 = data.list[34]['dt_txt'].split(' ')[0];
      forecastDate5.textContent = dateData5;

      let weatherIcon5 = data.list[34].weather[0].icon;
      let weatherIconLink5 = 'https://openweathermap.org/img/w/' + weatherIcon5 + '.png';
      icon5.src = weatherIconLink5;

      let forecastTemp5 = data.list[34].main.temp;
      temp5.textContent = 'Temp: ' + forecastTemp5 + ' °F';
      let forecastWind5 = data.list[34].wind.speed;
      wind5.textContent = 'wind: ' + forecastWind5 + 'MPH';
      let humidityForecast5 = data.list[34].main.humidity;
      humidity5.textContent = 'Humidity: ' + humidityForecast5 + '%';

      console.log(weatherIconLink);
    });
}
// get search history in local storage
function getSearchHistory() {
  return localStorage.getItem('cityHistory');
}

// Sets the input value in localStorage
function setSearchHistory(city) {
  let history = getSearchHistory();
  let parseHistory;
  if (history) {
    // parse history

    console.log('History exist' + history);
    parseHistory = JSON.parse(history);
  } else {
    console.log('No history ' + history);
    parseHistory = [];
  }
  if (!parseHistory.includes(city)) {
    parseHistory.unshift(city);
    window.localStorage.setItem('cityHistory', JSON.stringify(parseHistory));
  }
}

// Append the search input from localStorage to the cities list
function displayHistory() {
  let history = getSearchHistory();

  if (history) {
    searchHistory.innerHTML = 'Search History';
    let parseHistory = JSON.parse(history);
    for (let i = 0; i < parseHistory.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = parseHistory[i];
      searchHistory.append(liEl);
    }
  }
  inputEl.value = '';
}
console.log(searchBtn);

// add event listener
searchBtn.addEventListener('click', function (e) {
  e.preventDefault();

  var city = inputEl.value;
  setSearchHistory(city);
  displayHistory();

  getWeather(city);
});

displayHistory();
