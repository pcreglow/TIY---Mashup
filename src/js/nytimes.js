(function(window){

$.getJSON('../api/nytimes_24.json')
.then(function(nytimes){
  console.log(nytimes);

$title = $('.articleTitle');
$title.text(nytimes.results[0].title);

$abstract = $('.articleAbstract');
$abstract.text(nytimes.results[0].abstract);

$url = $('.articleUrl');
$url.text(nytimes.results[0].url);

});


})(window);
