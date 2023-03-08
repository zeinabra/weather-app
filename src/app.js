function displayTemp(response) {
  let tempreture = Math.round(response.data.main.temp);
  let temp = document.querySelector("#tempreture");
  temp.innerHTML = `${tempreture}`;
  let desc = document.querySelector("#description");
  desc.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
}
function showTemp(event) {
  event.preventDefault();
  let city = document.querySelector("#search-eng");
  let apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
  let cityName = document.querySelector("#city");
  cityName.innerHTML = `${city.value}`;
}

let searchFormControl = document.querySelector("#form-control");
searchFormControl.addEventListener("submit", showTemp);

let date = document.querySelector("#date");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedensday",
  "Thursday",
  "Friday",
  "Saturday",
];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  date.innerHTML = `${days[now.getDay()]} ${hour}:${minutes}`;

//current button
function displayCurrentTempre(response) {
  let tempreture = Math.round(response.data.main.temp);
  let temp = document.querySelector("#tempreture");
  temp.innerHTML = `${tempreture}`;
  let desc = document.querySelector("#description");
  desc.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  date.innerHTML = `${days[now.getDay()]} ${hour}:${minutes}`;
}
function displayCurrentCity(position) {
  let lati = position.coords.latitude;
  let longi = position.coords.longitude;
  let apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentTempre);
}
function displayCity() {
  navigator.geolocation.getCurrentPosition(displayCurrentCity);
}
let currentButton = document.querySelector("#current_btn");
currentButton.addEventListener("click", displayCity);
