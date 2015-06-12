(function(window){

$('button').click(function(){
  console.log('Click here!');
//What happens when you click?
//Add class 'active content', remove class "active content"


$('.tab-1 div').toggleClass('inactive-content');
$('.tab-1 div').toggleClass('.active-content');

$('.tab-2 div').toggleClass('inactive-content');
$('.tab-2 div').toggleClass('.active-content');





})



})(window);
