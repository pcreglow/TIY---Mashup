// (function(window) {

// var appId = zJmZqZ4i;


$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=10007,us").then(function(weather) {

  console.log(weather);
  $name = $('.cityName');
  $name.text(weather.name);

});


// })(window);