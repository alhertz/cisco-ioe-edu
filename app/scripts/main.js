$(function(){
    'use strict';

    $( '#scenario-1 .content' ).fadeIn( 2500 );
    $( '#scenario-1 .secondary-content' ).delay( 500 ).fadeIn( 2500, function() {
        // $( '#scenario-1 #arrow' ).delay( 500 ).show().addClass( 'animated slideInDown' );
        $( '#scenario-1 #scenario-link' ).delay().addClass( 'animated swing' );
    });

    $('#scenario-2').waypoint(function() {
        $( '#arrow' ).fadeOut( 2500 );
        $( '#scenario-2 .content, .scenarios nav' ).fadeIn( 2500 );
    },{ offset: '25%' });
    $('#scenario-3').waypoint(function() {
        $( '#scenario-3 .content' ).fadeIn( 2500 );
    },{ offset: '25%' });
    $('#scenario-4').waypoint(function() {

        $( '#scenario-4 .content' ).fadeIn( 2500 );
    },{ offset: '25%' });
    $('#scenario-5').waypoint(function() {
        $( '#scenario-5 .content' ).fadeIn( 2500 );
    },{ offset: '25%' });
    $('#scenario-6').waypoint(function() {
        $( '#scenario-6 .content' ).fadeIn( 2500 );
    },{ offset: '25%' });

    $( '.showTechnology' ).click(function() {
        // Hide the scenarios nav
        $( '.scenarios > nav').fadeOut();
        // Find respective .content and hide it
        $(this).closest('section').find('.content').fadeOut(); 
        $(this).closest('section').find('.technology').fadeIn( function() {
            // Blur the content and then fade it back in slowly
            $( '.close' ).click(function() {
                $(this).closest('section').find('.technology').fadeOut( function() {
                    $(this).closest('section').find('.content').fadeIn();
                    $( '.scenarios > nav').fadeIn();
                });
            });
        });
    });
});
