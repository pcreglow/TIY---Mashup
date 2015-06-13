$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?&tags=nyc&lang=en-us&format=json&jsoncallback=?").then(function(photos) {

  console.log(photos);

  $media = $('img#media');
  $media.attr('src', photos.items[0].media.m);

  // $name = $('.cityName');
  // $name.text(weather.name);

});
