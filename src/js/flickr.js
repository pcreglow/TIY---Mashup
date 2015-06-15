$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?&tags=nyc,1024&lang=en-us&format=json&jsoncallback=?").then(function(photos) {

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

  //Not looping the way I want it to
  // var images = new Array(photos.items[0].media.m, photos.items[1].media.m, photos.items[2].media.m, photos.items[3].media.m, photos.items[4].media.m, photos.items[5].media.m, photos.items[6].media.m);
  // var index = 1;
  //
  // function rotateImage() {
  //
  //   $('.flickr').fadeOut('fast ', function() {
  //
  //     $(this).attr('src', images[index]);
  //     $(this).fadeIn('slow', function() {
  //       if (index == images.length - 1) {
  //         index = 0;
  //       } else {
  //         index++;
  //       }
  //
  //     });
  //   });
  // };
  //
  //
  //
  // setInterval(rotateImage, 2500);

});