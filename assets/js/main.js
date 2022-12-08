

(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(50).fadeOut('slow');
      $('body').delay(50).css({
        'overflow': 'visible'
      });
    });

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

/* 3. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };

/* 4. MainSlider-1 */
    // h1-hero-active
    function mainSlider() {
      var BasicSlider = $('.slider-active');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        fade: true,
        arrows: false, 
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();

/* 5. Testimonial Active*/

/* 4. Testimonial Active*/
    var testimonial = $('.h1-testimonial-active');
    if(testimonial.length){
    testimonial.slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:false,
        loop:true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrow:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        ]
      });
    }



/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();

// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
      }
// 12 Pop Up Video
    var popUp = $('.popup-video');
    if(popUp.length){
      popUp.magnificPopup({
        type: 'iframe'
      });
    }

/* 13. counterUp*/
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });
    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end
    

    // Use this for real timer date
    /*  var timerdate = "2020/01/01"; */

	$("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span><p>Days</p> </div>" + "<div class='cd-item'><span>%H</span><p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span><p>Min</p> </div>" + "<div class='cd-item'><span>%S</span><p>Sec</p> </div>"));
    });



    
/* 14. Datepicker */
  $('#datepicker1').datepicker();

// 15. Time Picker
  $('#timepicker').timepicker();


})(jQuery);

// HERO SLIDER
var menu = [];
jQuery('.swiper-slide').each( function(index){
    menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
});
var interleaveOffset = 0.5;
var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        progress: function() {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = swiper.width * interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-inner").style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
            }      
        },

        touchStart: function() {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },

        setTransition: function(speed) {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-inner").style.transition =
                speed + "ms";
            }
        }
    }
};

var swiper = new Swiper(".swiper-container", swiperOptions);

// DATA BACKGROUND IMAGE
var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function(indx){
    if ($(this).attr("data-background")){
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
});


var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("left");
var right = document.getElementById("right");
var pagePrefix = "slide";
var pageShift = 500;
var transitionPrefix = "circle";
var svg = true;

function leftSlide() {
	if (click) {
		if (curpage == 1) curpage = 5;
		console.log("woek");
		sliding = true;
		curpage--;
		svg = true;
		click = false;
		for (k = 1; k <= 4; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= 4; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function rightSlide() {
	if (click) {
		if (curpage == 4) curpage = 0;
		console.log("woek");
		sliding = true;
		curpage++;
		svg = false;
		click = false;
		for (k = 1; k <= 4; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= 4; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function move() {
	if (sliding) {
		sliding = false;
		if (svg) {
			for (j = 1; j <= 9; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
				console.log("streak");
			}
		} else {
			for (j = 10; j <= 18; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
				console.log("streak");
			}
		}
		setTimeout(() => {
			for (i = 1; i <= 4; i++) {
				if (i == curpage) {
					var a = document.getElementById(pagePrefix + i);
					a.className += " up1";
				} else {
					var b = document.getElementById(pagePrefix + i);
					b.classList.remove("up1");
				}
			}
			sliding = true;
		}, 600);
		setTimeout(() => {
			click = true;
		}, 1700);

		setTimeout(() => {
			if (svg) {
				for (j = 1; j <= 9; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
			} else {
				for (j = 10; j <= 18; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
				sliding = true;
			}
		}, 850);
		setTimeout(() => {
			click = true;
		}, 1700);
	}
}

left.onmousedown = () => {
	leftSlide();
};

right.onmousedown = () => {
	rightSlide();
};

document.onkeydown = e => {
	if (e.keyCode == 37) {
		leftSlide();
	} else if (e.keyCode == 39) {
		rightSlide();
	}
};

//for codepen header
// setTimeout(() => {
// 	rightSlide();
// }, 500);


    