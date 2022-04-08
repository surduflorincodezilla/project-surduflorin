
$(window).scroll(function(){
  if ($(this).scrollTop() > 150) {
      $('.navbar').addClass('navbar-fixed');
  } else {
      $('.navbar').removeClass('navbar-fixed');
  }
});

$('.top-banner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.qoute').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
});

/*if (window.matchMedia("(max-width: 767px)").matches) {
  $('#portfolio .row').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true
  });
} 

if (window.matchMedia("(max-width: 1024px)").matches) {
  $('#portfolio .row').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true
  });
} 

$('#portfolio .row').slick({
  responsive: [
    {
      breakpoint: 1200,
      settings: "unslick",
      // unslick: true
    },
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        fade: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true
      }
    }
  ]
});*/


var carousel = $('#portfolio .row');

function showSliderScreen($screenWidth) {
    if($screenWidth <= "768") {
        if(!carousel.hasClass('slick-initalized')){
            carousel.slick({
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    } else {
        if (carousel.hasClass('slick-initialized')) {
            carousel.unslick();
        }
    }
}

var screenWidth = $(window).width();
$(window).ready(showSliderScreen(screenWidth)).resize(function(){
    var screenWidth = $(window).width();
    showSliderScreen(screenWidth);
});