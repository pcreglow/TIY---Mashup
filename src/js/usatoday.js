$.getJSON("http://api.usatoday.com/open/breaking?api_key=cwm8gef63tyfmdqh25m4pu8f?encoding=json").then(function(usatoday) {





  //Article 4
  $title = $('.articleTitle-4');
  $title.text(usatoday.results[3].title);

  $abstract = $('.articleAbstract-4');
  $abstract.text(usatoday.results[3].abstract);

  $url = $('.articleUrl-4');
  $url.text(usatoday.results[3].url);
  console.log(usatoday)


})