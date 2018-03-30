// **** Global Variables ***** //
var apiKey = '52abe8a43d165572fc42393c9861f276';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
var weatherData;
var button;
var cityInput;
var description = '';
var weathericon;
var name;
var sunrise;
var sunset;
var temperature = 0;
var high = 0;
var low = 0;
var wind = 0;
var humidity = 0;
var pressure = 0;

// **** Setup Function ****** //
function setup(){
  createCanvas(800, 800);
  button = select('#submit');
  cityInput = select('#city');
  button.mousePressed(queryAPI);
  noLoop();
}

// **** Query API Function *** //
function queryAPI(){
  var request = baseURL + cityInput.value() + '&apikey=' + apiKey;
  loadJSON(request, getWeatherData);
}


function getWeatherData(apiData){
  weatherData = apiData;
  name = weatherData.name;
  description = weatherData.weather[0].description;
  sunrise = weatherData.sys.sunrise;
  sunset = weatherData.sys.sunset;
  weathericon = weatherData.weather[0].icon;
  temperature = weatherData.main.temp;
  low = weatherData.main.temp_min;
  high = weatherData.main.temp_max;
  wind = weatherData.wind.speed;
  humidity = weatherData.main.humidity;
  pressure = weatherData.main.pressure;
  print(weatherData);
  redraw();
}

// **** Draw Function **** //
function draw(){
  background(225);
  if (weatherData){
    noStroke();
    fill(141, 170, 255);
    rect(25,25,500,300);
    textSize(25);
    fill(255);
    text(cityInput.value(), 50, 50);
    textSize(15);
    text(sunrise, 400, 60);
    text(sunset, 450, 60);
    text(description, 50, 70);
    textSize(50);
    text(temperature + ' F', 50, 120);
    textSize(15);
    text('High ' + high + ' F /', 50, 150);
    text('Low ' + low + ' F', 170, 150);
    text('Wind ' + wind + ' meter/sec', 50, 210);
    text('Humidity ' + humidity + '%', 50, 240);
    text('Pressure ' + pressure + ' hPa', 50, 270);
  }
}
