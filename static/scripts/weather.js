async function setWeather() {
    try {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=30.51&longitude=76.65&current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto&forecast_days=1");

        let data = await res.json();
        data = data.current;
        document.getElementById("temp-value").innerHTML = Math.round(data.temperature_2m);
        document.getElementById("weather-code").innerHTML = code_map[data.weather_code.toString()];
        document.getElementById("wind-value").innerHTML = data.wind_speed_10m;
        document.getElementById("rain-value").innerHTML = data.precipitation
        document.getElementById("humidity-value").innerHTML = data.relative_humidity_2m

        const date = new Date();
        const hour = date.getHours();
        if(hour < 7 || hour > 20) {
            document.getElementById("cloud-icon").setAttribute("src", "./icons/moon-sleep.svg");
        }
        
    } catch (error) {
        console.error("Error: ", error);
    }
}

setWeather();


const code_map = {
    "0": "Clear sky",
    "1": "Mainly clear",
    "2": "Partly cloudy",
    "3": "Overcast",
    "45": "Fog",
    "48": "Depositing",
    "51": "Drizzle",
    "53": "Drizzle",
    "55": "Drizzle",
    "56": "Freezing Drizzle",
    "57": "Freezing Drizzle",
    "61": "Rain",
    "63": "Rain",
    "65": "Rain",
    "66": "Freezing Rain",
    "67": "Freezing Rain",
    "71": "Snow fall",
    "73": "Snow fall",
    "75": "Snow fall",
    "77": "Snow grains",
    "80": "Rain showers",
    "81": "Rain showers",
    "82": "Rain showers",
    "85": "Snow showers",
    "86": "Snow showers",
    "95": "Thunderstorm",
    "96": "Thunderstorm",
    "99": "Thunderstorm"
  }
  

