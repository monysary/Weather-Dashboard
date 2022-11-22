// Variables for API call
var APIkey = "59bb2d1c760fcf9313acc25aca14f9ce";
var cityName = "Los Angeles";
var iconID = "10d"
var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey + "&units=imperial";
var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey + "&units=imperial";
var weatherIconUrl = "http://openweathermap.org/img/wn/" + iconID + "@2x.png"

// Fetch current weather data
fetch(currentWeatherUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(Date(1669072785));
        console.log(Date(1669072785).split(" "));

        
    })

// Fetch 5-day forecast weather data
fetch(forecastUrl)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})
