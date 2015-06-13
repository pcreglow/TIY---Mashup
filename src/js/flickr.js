$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?&tags=nyc&lang=en-us&format=json&jsoncallback=?").then(function(photos) {

  console.log(photos);

  $media = $('img#media-1');
  $media.attr('src', photos.items[0].media.m);

  $media = $('img#media-2');
  $media.attr('src', photos.items[1].media.m);

  $media = $('img#media-3');
  $media.attr('src', photos.items[2].media.m);

  $media = $('img#media-4');
  $media.attr('src', photos.items[3].media.m);

  $media = $('img#media-5');
  $media.attr('src', photos.items[4].media.m);

  $media = $('img#media-6');
  $media.attr('src', photos.items[5].media.m);

  // $name = $('.cityName');
  // $name.text(weather.name);

});
