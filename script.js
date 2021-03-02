const appId = '3f528a2f09f9fe941ba3bb196a766045';

const getDataForCity = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
  .then(response => response.json());

 
const createCardHtml = (name, emoji, temp, feelsLike, description, humidity, timezone) => `
  <div class="card1">
    <div class="row no-gutters align-items-center">    
      <div class="col-2 h2 pl-1 pt-1 text-center">                
        ${emoji}
      </div>
      <div class="col-10">
        <div class="card-body">
          <div class="row card-title justify-content-between align-items-center mr-3 mb-1">
            <h4>${name}</h4>
            <h6>${temp}c, feels like ${feelsLike}c</h6>
          </div>
          <div class="row1">
            <h5 class="card-subtitle text-muted">Humidity: ${humidity}</h5>
          </div>
          <div class="row2">
            <h5 class="card-subtitle text-muted">${description}</h5>
          </div>
          <div class="row3">
            <h5 class="card-subtitle text-muted">Timezone: ${timezone}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
`;


const emojis = {
  '01d': '☀️',
  '02d': '⛅️',
  '03d': '☁️',
  '04d': '☁️',
  '09d': '🌧',
  '10d': '🌦',
  '11d': '⛈',
  '13d': '❄️',
  '50d': '💨',
  '01n': '☀️',
  '02n': '⛅️',
  '03n': '☁️',
  '04n': '☁️',
  '09n': '🌧',
  '10n': '🌦',
  '11n': '⛈',
  '13n': '❄️',
  '50n': '💨',
};

const goButton = document.querySelector('#go-button');
const cityInput = document.querySelector('#city-input');
const weatherContainer = document.querySelector('#weather-container');

goButton.addEventListener('click', () => {
  
  const city = cityInput.value;

  
  getDataForCity(city)
    .then(data => {
      
      const name = data.name;
      const emoji = emojis[data.weather[0].icon];
      const temp = data.main.temp;
      const feelsLike = data.main.feels_like;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const timezone = data.timezone;
      
      const cardHtml = createCardHtml(name, emoji, temp, feelsLike, description, humidity, timezone);

      
      weatherContainer.innerHTML = cardHtml;
    });
});

