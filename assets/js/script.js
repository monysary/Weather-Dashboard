// Variables for API fetch
var APIkey = "59bb2d1c760fcf9313acc25aca14f9ce";
var cityName = "Los Angeles"
var currentWeatherUrl= "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",us&appid=" + APIkey + "&units=imperial";
var forecastUrl= "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",us&appid=" + APIkey + "&units=imperial";
fetchData()

// Variables for DOM manipulation
var citySearched = []
var searchHistory = document.querySelector("#search-history");

// Displays past searches if it is present in local storage
if (localStorage.getItem("cities") !== null) {
    recentSearch();
}

// Eventlistener for input field when searching city
document.addEventListener("submit", function(event) {
    event.preventDefault();

    // Update fetch URL and run API fetch
    cityName = document.querySelector("#search-field").value;
    currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",us&appid=" + APIkey + "&units=imperial";
    forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",us&appid=" + APIkey + "&units=imperial";
    fetchData();
    
    // Store search in local storage
    citySearched.push(cityName);
    localStorage.setItem("cities", citySearched);

    // Call function to populate recent search
    recentSearch()

    // Clear search field
    cityName = "";
})

// Function for pulling city from local storage into Recent Searches section
function recentSearch() {
    var citiesArr = localStorage.getItem("cities").split(",");

    while (searchHistory.firstChild) {
        searchHistory.removeChild(searchHistory.firstChild);
    };

    for (var i = 0; i < citiesArr.length; i++) {
        var div = document.createElement("div")
        div.setAttribute("class", "searched");
        document.querySelector("#search-history").append(div);
        div.textContent = citiesArr[i];
    }



}

function fetchData() {
    // Fetch current weather data
    fetch(currentWeatherUrl)
        .then(function(response) {
            if (response.status !== 200) {
                document.querySelector("#city-name").textContent = "CITY NOT FOUND, PLEASE TRY AGAIN";
                return
            }
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
            var iconID = data.weather[0].icon;
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
        var d1Date = data.list[7].dt_txt.split(" ")[0];
        document.querySelector("#day1forecast").textContent = d1Date
        var d2Date = data.list[15].dt_txt.split(" ")[0];
        document.querySelector("#day2forecast").textContent = d2Date
        var d3Date = data.list[23].dt_txt.split(" ")[0];
        document.querySelector("#day3forecast").textContent = d3Date
        var d4Date = data.list[31].dt_txt.split(" ")[0];
        document.querySelector("#day4forecast").textContent = d4Date
        var d5Date = data.list[39].dt_txt.split(" ")[0];
        document.querySelector("#day5forecast").textContent = d5Date
        
        // Fetch forecast weather icon
        var d1IconID = data.list[7].weather[0].icon
        var d1IconUrl = "http://openweathermap.org/img/wn/" + d1IconID + "@2x.png";
        console.log(d1IconUrl);
        document.querySelector("#day1img").setAttribute("src", d1IconUrl);
        var d2IconID = data.list[15].weather[0].icon
        var d2IconUrl = "http://openweathermap.org/img/wn/" + d2IconID + "@2x.png";
        document.querySelector("#day2img").setAttribute("src", d2IconUrl);
        var d3IconID = data.list[23].weather[0].icon
        var d3IconUrl = "http://openweathermap.org/img/wn/" + d3IconID + "@2x.png";
        document.querySelector("#day3img").setAttribute("src", d3IconUrl);
        var d4IconID = data.list[31].weather[0].icon
        var d4IconUrl = "http://openweathermap.org/img/wn/" + d4IconID + "@2x.png";
        document.querySelector("#day4img").setAttribute("src", d4IconUrl);
        var d5IconID = data.list[39].weather[0].icon
        var d5IconUrl = "http://openweathermap.org/img/wn/" + d5IconID + "@2x.png";
        document.querySelector("#day5img").setAttribute("src", d5IconUrl);

        // Fetch forecast temperature data
        var d1temp = data.list[7].main.temp
        document.querySelector("#day1temp").textContent = d1temp
        var d2temp = data.list[15].main.temp
        document.querySelector("#day2temp").textContent = d2temp
        var d3temp = data.list[23].main.temp
        document.querySelector("#day3temp").textContent = d3temp
        var d4temp = data.list[31].main.temp
        document.querySelector("#day4temp").textContent = d4temp
        var d5temp = data.list[39].main.temp
        document.querySelector("#day5temp").textContent = d5temp

        // Fetch forecast humidity data
        var d1humid = data.list[7].main.humidity
        document.querySelector("#day1humid").textContent = d1humid
        var d2humid = data.list[15].main.humidity
        document.querySelector("#day2humid").textContent = d2humid
        var d3humid = data.list[23].main.humidity
        document.querySelector("#day3humid").textContent = d3humid
        var d4humid = data.list[31].main.humidity
        document.querySelector("#day4humid").textContent = d4humid
        var d5humid = data.list[39].main.humidity
        document.querySelector("#day5humid").textContent = d5humid

        // Fetch forecast wind data
        var d1wind = data.list[7].wind.speed
        document.querySelector("#day1wind").textContent = d1wind
        var d2wind = data.list[15].wind.speed
        document.querySelector("#day2wind").textContent = d2wind
        var d3wind = data.list[23].wind.speed
        document.querySelector("#day3wind").textContent = d3wind
        var d4wind = data.list[31].wind.speed
        document.querySelector("#day4wind").textContent = d4wind
        var d5wind = data.list[39].wind.speed
        document.querySelector("#day5wind").textContent = d5wind
    })
}
