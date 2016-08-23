/*--------------------------------------------------------------
# Fake-loader.js - via, http://www.joaopereira.pt
--------------------------------------------------------------*/
(function ($) {
 
    $.fn.fakeLoader = function(options) {

        //Defaults
        var settings = $.extend({
            timeToHide:1200, // Default Time to hide fakeLoader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '999',  // Default zIndex 
            bgColor: '#2ecc71', // Default background color
            spinner:'spinner7', // Default Spinner
            imagePath:'' // Default Path custom image
        }, options);

        //Customized Spinners
        var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
        var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
        var spinner04 = '<div class="fl spinner4"></div>'; 
        var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>'; 
        var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; 
        var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; 

        //The target
        var el = $(this);

        //Init styles
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };

        //Apply styles
        el.css(initStyles);

        //Each 
        el.each(function() {
            var a = settings.spinner;
            //console.log(a)
                switch (a) {
                    case 'spinner1':
                            el.html(spinner01);
                        break;
                    case 'spinner2':
                            el.html(spinner02);
                        break;
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    case 'spinner4':
                            el.html(spinner04);
                        break;
                    case 'spinner5':
                            el.html(spinner05);
                        break;
                    case 'spinner6':
                            el.html(spinner06);
                        break;
                    case 'spinner7':
                            el.html(spinner07);
                        break;
                    default:
                        el.html(spinner01);
                    }

                //Add customized loader image

                if (settings.imagePath !='') {
                    el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
                }
                centerLoader();
        });

        //Time to hide fakeLoader
        setTimeout(function(){
            $(el).fadeOut();
        }, settings.timeToHide);

        //Return Styles 
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });

 
    }; // End Fake Loader
 

        //Center Spinner
        function centerLoader() {

            var winW = $(window).width();
            var winH = $(window).height();

            var spinnerW = $('.fl').outerWidth();
            var spinnerH = $('.fl').outerHeight();

            $('.fl').css({
                'position':'absolute',
                'left':(winW/2)-(spinnerW/2),
                'top':(winH/2)-(spinnerH/2)
            });

        }

        $(window).load(function(){
                centerLoader();
              $(window).resize(function(){
                centerLoader();
              });
        });


}(jQuery));




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
// @codekit-prepend "fake-loader.js";

/*** Site ***/
// @codekit-prepend "sticky-nav.js";
// @codekit-prepend "skip-link-focus.js";

