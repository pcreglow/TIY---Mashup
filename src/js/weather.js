// (function(window) {


$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=10007,us&units=imperial").then(function(weather) {

  $name = $('.cityName');
  $name.text(weather.name);

  $cityTemp = $('.cityTemp');
  $cityTemp.text(weather.main.temp);

  $cityDescription = $('.cityDescription');
  $cityDescription.text(weather.weather[0].description);



});


// })(window);