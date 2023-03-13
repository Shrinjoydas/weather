let weather = {
  apiKey: "68b49b621fc721f5e3b76c7023938978",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey +
        "&units=metric"
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  city: document.querySelector("input").value,

  displayWeather: (data) => {
    const { name } = data;
    const { temp, humidity } = data.main;
    const { icon, description } = data.weather[0];
    const { speed } = data.wind;
   

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp + " °C";
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".humidity").innerText =
      "Humidity : " + humidity + "%";
    document.querySelector(".speed").innerText =
      "Wind Speed : " + speed + "km/h";

    document.querySelector(".screen").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/random/2200x1180/? " + name + "')";
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector("button").addEventListener("click", () => {
  weather.search();
});

// this will also work

//  document.querySelector("button").addEventListener("click", () =>{
//     weather.fetchWeather(document.querySelector(".search-bar").value)
//  })

document.querySelector(".search-bar").addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    weather.search();
  }
});

