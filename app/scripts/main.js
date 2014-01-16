$(function(){
    // JS lint is mad at me
    'use strict';
    
    $('#scenario-1').css({'height':(($(window).height()))+'px'});
    $(window).resize(function(){
        $('#scenario-1').css({'height':(($(window).height()))+'px'});
    });

    // Fade the introduction in all sexy like
    $( '#scenario-1 .content' ).fadeIn( 2500 );
    // Fade the secondary content in all sexy like too
    // But also wait a little bit
    $( '#scenario-1 .secondary-content' ).delay( 500 ).fadeIn( 2500 );

    // Tooltip Event
    $('.scenarios nav a').hover(
        function () {
            $(this).closest('a').find( '.tooltip' ).css( 'opacity', '1.0' );
        },
        function () {
            $(this).closest('a').find( '.tooltip' ).css( 'opacity', '0' );
        }
    );

    // Trigger display of content when
    // scenario wrapper is 25% (of the viewport) away
    //TODO make this smarter
    $('#scenario-2').waypoint(function() {
        $( '#arrow' ).fadeOut( 2500 );
        $( '#scenario-2 .content, .scenarios nav' ).fadeIn( 1500 );
        $(this).closest('section').find( '.img-sm' ).addClass( 'fadeIn' );
        $(this).closest('section').find( '.img-md' ).addClass( 'slideUp' );
        $(this).closest('section').find( '.img-lg' ).addClass( 'slideRight' );
        $(this).closest('section').find( '.col-md-7' ).addClass( 'slideLeft' );
    },{ offset: '50%' });
    $('#scenario-3').waypoint(function() {
        $( '#scenario-3 .content' ).fadeIn( 2500 );
        $(this).closest('section').find( '.img-sm' ).addClass( 'slideRight' );
        $(this).closest('section').find( '.img-md' ).addClass( 'fadeIn' );
        $(this).closest('section').find( '.img-lg' ).addClass( 'hatch' );
        $(this).closest('section').find( '.col-md-7' ).addClass( 'fadeIn' );
    },{ offset: '50%' });
    $('#scenario-4').waypoint(function() {
        $( '#scenario-4 .content' ).fadeIn( 2500 );
        $(this).closest('section').find( '.img-sm' ).addClass( 'slideRight' );
        $(this).closest('section').find( '.img-md' ).addClass( 'fadeIn' );
        $(this).closest('section').find( '.img-lg' ).addClass( 'bigEntrance' );
        $(this).closest('section').find( '.col-md-7' ).addClass( 'hatch' );
    },{ offset: '50%' });
    $('#scenario-5').waypoint(function() {
        $( '#scenario-5 .content' ).fadeIn( 2500 );
        $(this).closest('section').find( '.img-sm' ).addClass( 'slideRight' );
        $(this).closest('section').find( '.img-md' ).addClass( 'slideUp' );
        $(this).closest('section').find( '.img-lg' ).addClass( 'slideRight' );
        $(this).closest('section').find( '.col-md-7' ).addClass( 'bigEntrance' );
    },{ offset: '50%' });
    $('#scenario-6').waypoint(function() {
        $( '#scenario-6 .content' ).fadeIn( 2500 );
        $(this).closest('section').find( '.img-sm' ).addClass( 'hatch' );
        $(this).closest('section').find( '.img-md' ).addClass( 'slideUp' );
        $(this).closest('section').find( '.img-lg' ).addClass( 'bigEntrance' );
        $(this).closest('section').find( '.col-md-7' ).addClass( 'fadeIn' );
    },{ offset: '50%' });

    // Make the show technology button...umm
    // (you guessed it) show technology.
    $( '.showTechnology' ).click(function() {
        // Hide the scenarios nav
        $( '.scenarios > nav').fadeOut();
        // Find respective .content and hide it
        $(this).closest('section').find('.content').fadeOut( 500 );
        $(this).closest('section').find('.technology').fadeIn( 1000, function() {
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
