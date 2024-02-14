/*const apiKey = "3e3cad87da4fc2e8c1e397f022cdcec8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=&appid=3e3cad87da4fc2e8c1e397f022cdcec8&units=metric";
//https://api.openweathermap.org/data/2.5/weather?&units=metric&q=pune&appid=%20${apiKey}

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button ");

async function checkWeather(city)
{
    const response = await fetch(apiUrl + city + '&appid= ${apiKey}');
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


}

searchBtn.addEventListener("click", () => 
{
    checkWeather(searchBox.value);
}*/

const apiKey = "3e3cad87da4fc2e8c1e397f022cdcec8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchBox = document.getElementById("searchBox");
    const weatherIcon = document.getElementById("weather-icon");

    async function checkWeather(city) {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") 
        {
            weatherIcon.src = "images/cloud.png";
        } 
        else if (data.weather[0].main == "Clear") 
        {
            weatherIcon.src = "images/clear.png";
        } 
        else if (data.weather[0].main == "Rain") 
        {
            weatherIcon.src = "images/rain.png";
        } 
        else if (data.weather[0].main == "Drizzle") 
        {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") 
        {
            weatherIcon.src = "images/mist.png";
        }
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});


