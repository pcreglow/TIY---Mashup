(function(window) {

  $('#weather').click(function() {
    $('.tab-1 div').toggleClass('inactive-content');
    $('.tab-1 div').toggleClass('.active-content');
  });

  $('#nytimes').click(function() {
    $('.tab-2 div').toggleClass('inactive-content');
    $('.tab-2 div').toggleClass('.active-content');
  });


})(window);
