// Variables for API fetch
var APIkey = "59bb2d1c760fcf9313acc25aca14f9ce";
var cityName = "Los Angeles";
var currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey + "&units=imperial";
var forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey + "&units=imperial";

// Variables for pulling data from API
var iconID;


// Fetch current weather data
fetch(currentWeatherUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Fetch city name
        document.querySelector("#city-name").textContent = data.name;
        
        // Display current date
        var dateArr = Date().split(" ");
        var day = dateArr[0];
        var month = dateArr[1];
        var date = dateArr[2];
        var year = dateArr[3];
        document.querySelector("#current-date").textContent = day + ", " + month + " " + date + ", " + year;

        // Fetch current weather icon
        iconID = data.weather[0].icon;
        var IconUrl = "http://openweathermap.org/img/wn/" + iconID + "@2x.png";
        document.querySelector("#day0img").setAttribute("src", IconUrl);

        // Fetch temperature, humidity, and wind data
        document.querySelector("#temperature").textContent = data.main.temp;
        document.querySelector("#humidity").textContent = data.main.humidity;
        document.querySelector("#wind").textContent = data.wind.speed;
    })

// Fetch 5-day forecast weather data
fetch(forecastUrl)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);

    // Fetch forecast date
    var d1Date = data.list[4].dt_txt.split(" ")[0];
    document.querySelector("#day1forecast").textContent = d1Date
    var d2Date = data.list[12].dt_txt.split(" ")[0];
    document.querySelector("#day2forecast").textContent = d2Date
    var d3Date = data.list[20].dt_txt.split(" ")[0];
    document.querySelector("#day3forecast").textContent = d3Date
    var d4Date = data.list[28].dt_txt.split(" ")[0];
    document.querySelector("#day4forecast").textContent = d4Date
    var d5Date = data.list[36].dt_txt.split(" ")[0];
    document.querySelector("#day5forecast").textContent = d5Date
    
    // Fetch forecast weather icon
    var d1IconID = data.list[4].weather[0].icon
    var d1IconUrl = "http://openweathermap.org/img/wn/" + d1IconID + "@2x.png";
    document.querySelector("#day1img").setAttribute("src", d1IconUrl);
    var d2IconID = data.list[12].weather[0].icon
    var d2IconUrl = "http://openweathermap.org/img/wn/" + d2IconID + "@2x.png";
    document.querySelector("#day2img").setAttribute("src", d2IconUrl);
    var d3IconID = data.list[20].weather[0].icon
    var d3IconUrl = "http://openweathermap.org/img/wn/" + d3IconID + "@2x.png";
    document.querySelector("#day3img").setAttribute("src", d3IconUrl);
    var d4IconID = data.list[28].weather[0].icon
    var d4IconUrl = "http://openweathermap.org/img/wn/" + d4IconID + "@2x.png";
    document.querySelector("#day4img").setAttribute("src", d4IconUrl);
    var d5IconID = data.list[36].weather[0].icon
    var d5IconUrl = "http://openweathermap.org/img/wn/" + d5IconID + "@2x.png";
    document.querySelector("#day5img").setAttribute("src", d5IconUrl);

})
