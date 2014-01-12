$(function(){
  $('#scenario-2').waypoint(function(direction) {
    $( ".fadeIn" ).fadeIn( 2500 );
  });
});
$(document).ready(function(){
  $( "#scenario-1 .content" ).fadeIn( 2500 );
  $( "#scenario-1 .secondary-content" ).delay( 2500 ).fadeIn( 2500 );

  $( ".showTechnology" ).click(function() {
    $( ".scenarios > nav").fadeOut();
    $( ".technology" ).fadeIn( 'slow', function() {
      // Animation complete
      // $('.close').delay( 500 ).addClass('slideDown');
      $( ".close" ).click(function() {
        $('.technology').fadeOut();
        $( ".scenarios > nav").fadeIn();
      });
    });
  });
});
