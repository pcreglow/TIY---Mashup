$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?&tags=nyc&lang=en-us&format=json&jsoncallback=?").then(function(photos) {

  console.log(photos);

  $media = $('.media');
  $media.text(photos.items[0].title);

  // $name = $('.cityName');
  // $name.text(weather.name);

});