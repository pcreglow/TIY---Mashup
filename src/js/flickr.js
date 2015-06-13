(function(window) {


  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?&tags=nyc&lang=en-us&format=json&jsoncallback=?").then(function(photos) {


    $background = ('.background');
    $background.text(photos.items[0].title);

  });

})(window);