$(function(){
  $('#scenario-2').waypoint(function(direction) {
    $( "#scenario-2 .content" ).fadeIn( 2500 );
  });
  $('#scenario-3').waypoint(function(direction) {
    $( "#scenario-3 .content" ).fadeIn( 2500 );
  });
  $('#scenario-4').waypoint(function(direction) {
    $( "#scenario-4 .content" ).fadeIn( 2500 );
  });
  $('#scenario-5').waypoint(function(direction) {
    $( "#scenario-5 .content" ).fadeIn( 2500 );
  });
  $('#scenario-6').waypoint(function(direction) {
    $( "#scenario-6 .content" ).fadeIn( 2500 );
  });
});
$(document).ready(function(){
  $( "#scenario-1 .content" ).fadeIn( 2500 );
  $( "#scenario-1 .secondary-content" ).delay( 2500 ).fadeIn( 2500 );

  $( ".showTechnology" ).click(function() {
    $( ".scenarios > nav").fadeOut();
    $(".content").fadeOut( 500, function() {
      $( ".technology" ).fadeIn( 1500, function() {
        // Animation complete
        // $('.close').delay( 500 ).addClass('slideDown');
        $( ".close" ).click(function() {
          $('.technology').fadeOut( 500, function() {
            $('.content').fadeIn( 1500 );
            $( ".scenarios > nav").fadeIn();
          });
        });
      });
    });
    
  });
});
