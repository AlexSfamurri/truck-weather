
let lat = 29.930885;
let long = -90.085632;


const url = "https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+long+"&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit";

const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");


async function getWeather() {
    weatherArea.textContent = ""
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const temp = document.createElement("p");
    temp.className = "fs-4";
    weatherArea.appendChild(temp);
    const wind = document.createElement("p");
    wind.className = "fs-4";
    weatherArea.appendChild(wind);
    const temperature = data.current.temperature_2m;
    const temperatureUnit = data.current_units.temperature_2m;
    const windSpeed = data.current.wind_speed_10m;
    const windSpeedUnit = data.current_units.wind_speed_10m;
    temp.textContent = "The current temp is " + temperature + temperatureUnit;
    wind.textContent = "The current wind speed is " + windSpeed + windSpeedUnit;
}

button.addEventListener("click",getWeather);