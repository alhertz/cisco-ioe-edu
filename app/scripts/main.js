$(function(){
  $('#scenario-2').waypoint(function(direction) {
    $( ".fadeIn" ).fadeIn( 2500 );
  });
});
$(document).ready(function(){
  // $('#scenario-1 .img').delay(4000).removeClass('pulse');
  $( "#scenario-1 .content" ).fadeIn( 2500 );
  $( ".navbar" ).fadeIn( 2500 );
  $( "#scenario-1 .secondary-content" ).delay( 800 ).fadeIn( 2500 );
});