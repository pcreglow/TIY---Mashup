(function(window) {


  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?&tags=nyc&lang=en-us&format=json&jsoncallback=?").then(function(photos) {
    console.log(photos);

    $background = ('#background'),
      function(photosAgain) {
        $background.html(photosAgain.items[0].link);
      };
  });
  // $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne&api_key=[2ff81482e3b813d641b9c306b23914f1]&tags=[New York]").then(function(photos) {
  //
  //   console.log(photos);
  //

})(window);