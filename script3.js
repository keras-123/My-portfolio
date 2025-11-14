const apikey = "62145bc44c05c64c15406e95ba899cc7";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}$units=metrics`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const temperature = math.round(data.main.temp);

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;

    const details = [
      ` feels like: ${Math.round(data.main.feels_like)}`,
      `Humility: ${data.main.humility}% `,
      `Wind speed: ${data.main.Wind.speed}m/s`,
    ];

    weatherDataEl.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;
    weatherDataEl.querySelector("temperature").textContent = `${tempreture}℃`;

    weatherDataEl.querySelector(".description").textContent = description;

    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${details}</div>`)
      .join("");
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector("temperature").textContent = "";

    weatherDataEl.querySelector(".description").textContent =
      "an error occured,please try again later";

    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}
