// Variables for API fetch
var APIkey = "59bb2d1c760fcf9313acc25aca14f9ce";
var cityName = "Los Angeles";
var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey + "&units=imperial";
var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey + "&units=imperial";

// Variables for pulling data from API
var iconID;
var weatherIconUrl;
var unixTimestamp
var dateArr = Date(unixTimestamp).split(" ");
var day = dateArr[0];
var month = dateArr[1];
var date = dateArr[2];
var year = dateArr[3];

// Fetch current weather data
fetch(currentWeatherUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        // Fetch current city
        document.querySelector("#city-name").textContent = data.name
        
        // Fetch current date
        unixTimestamp = data.dt
        document.querySelector("#current-date").textContent = day + ", " + month + " " + date + ", " + year

        // Fetch current weather icon
        iconID = data.weather[0].icon
        weatherIconUrl = "http://openweathermap.org/img/wn/" + iconID + "@2x.png";
        document.querySelector("#day0img").setAttribute("src", weatherIconUrl)
    })

// Fetch 5-day forecast weather data
fetch(forecastUrl)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    // console.log(data);
})
