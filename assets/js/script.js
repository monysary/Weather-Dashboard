var APIkey = "59bb2d1c760fcf9313acc25aca14f9ce";
var cityName = "Los Angeles";
var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey + "&units=imperial";
var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey + "&units=imperial";

fetch(currentWeatherUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })

fetch(forecastUrl)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})