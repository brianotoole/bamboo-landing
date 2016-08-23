/*--------------------------------------------------------------
# Subnav - Sticky Nav on scroll
--------------------------------------------------------------*/
var subNav = $('.subnav');
var stickyNav = $('.sticky-nav');
if ($.find(".subnav")[0]) {
  $('.subnav li a').click(function(e) {
    if ($(this).attr('href')[0] == '#') {
      e.preventDefault();
      var href = $.attr(this, 'href');
      $('html, body').animate({
        scrollTop: $(href).offset().top
      }, 1000, function() {
        // window.location.hash = href;
        if (history.pushState) {
          history.pushState(null, null, href);
        } else {
          location.hash = href;
        }
      });
    }
  });
  var subnavPos = $('.subnav').offset().top;
  $(window).on('resize', function() {
    if ($(window).width() < 768) { //below sm
      subnavPos = $('.subnav').offset().top;
      if ($('.subnav').hasClass('fixed')) {
        $('.subnav').removeClass('fixed');
      };
    } else {
      if (!$('.subnav').hasClass('fixed')) {
        subnavPos = $('.subnav').offset().top;
      };
    };
  });
  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    if ($(window).width() >= 768) { //above sm
      if (scroll >= subnavPos) {
        $('.subnav').addClass('fixed');
        //$('.sticky-nav li a').addClass('active');
      } else {
        $('.subnav').removeClass('fixed');
      };
      $('.sticky-nav a').each(function() {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scroll && refElement.position()
          .top + refElement.height() > scroll) {
          $('.sticky-nav li a').removeClass("active");
          currentLink.addClass("active");
        } else {
          currentLink.removeClass("active");
        }
      });
    }
  });
}

/*--------------------------------------------------------------
# Theme Customizer - handlers to make customizations inside WP
# https://git.io/vWdr2
--------------------------------------------------------------*/

( function( $ ) {

	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title a, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title a, .site-description' ).css( {
					'clip': 'auto',
					'position': 'relative'
				} );
				$( '.site-title a, .site-description' ).css( {
					'color': to
				} );
			}
		} );
	} );
} )( jQuery );


/*--------------------------------------------------------------
# Skip Link Focus - Helps with accessibility for keyboard users
# https://git.io/vWdr2
--------------------------------------------------------------*/
( function() {
	var isWebkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    isOpera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    isIe     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( isWebkit || isOpera || isIe ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();

/*--------------------------------------------------------------
# Theme.js - Master file, all JS compiles here
--------------------------------------------------------------*/
/*** Vendors ***/

/*** Site ***/
// @codekit-prepend "sticky-nav.js";
// @codekit-prepend "customizer.js";
// @codekit-prepend "skip-link-focus.js";

