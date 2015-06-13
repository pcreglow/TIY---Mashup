(function(window) {

  $.getJSON('../api/nytimes_24.json')
    // http://api.nytimes.com/svc/news/{version}/content/{source}/{section}[/time-period][.response-format]?api-key={your-API-key}
    .then(function(nytimes) {
      console.log(nytimes);

      //Article 1
      $title = $('.articleTitle-1');
      $title.text(nytimes.results[0].title);

      $abstract = $('.articleAbstract-1');
      $abstract.text(nytimes.results[0].abstract);

      $url = $('.articleUrl-1');
      $url.text(nytimes.results[0].url);



      //Article 2
      $title = $('.articleTitle-2');
      $title.text(nytimes.results[1].title);

      $abstract = $('.articleAbstract-2');
      $abstract.text(nytimes.results[1].abstract);

      $url = $('.articleUrl-2');
      $url.text(nytimes.results[1].url);

      //Article 3
      $title = $('.articleTitle-3');
      $title.text(nytimes.results[2].title);

      $abstract = $('.articleAbstract-3');
      $abstract.text(nytimes.results[2].abstract);

      $url = $('.articleUrl-3');
      $url.text(nytimes.results[2].url);

      //Article 4
      $title = $('.articleTitle-4');
      $title.text(nytimes.results[3].title);

      $abstract = $('.articleAbstract-4');
      $abstract.text(nytimes.results[3].abstract);

      $url = $('.articleUrl-4');
      $url.text(nytimes.results[3].url);

    });


})(window);