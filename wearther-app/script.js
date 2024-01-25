async function getWeather() {
  const cityInput = document.getElementById("cityInput");
  const weatherResult = document.getElementById("weatherResult");

  const cityName = cityInput.value.trim();

  if (cityName === "") {
      alert("Please enter a city name.");
      return;
  }

  try {
      const apiKey = '030f5151a83286edfc3cf59716cd0698'; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      
      const response = await fetch(apiUrl);

      if (!response.ok) {
          throw new Error('City not found. Please enter a valid city name.');
      }

      const data = await response.json();

      const weatherInfo = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>
      `;

      weatherResult.innerHTML = weatherInfo;
  } catch (error) {
      alert(error.message);
      weatherResult.innerHTML = "";
  }
}
