(function(window) {


  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?&tags=nyc&lang=en-us&format=json&jsoncallback=?").then(function(photos) {


    $title = ('.title');
    $title.text(photos.items[0].title);


    // $cityTemp = $('.cityTemp');
    // $cityTemp.text(weather.main.temp);

  });

})(window);