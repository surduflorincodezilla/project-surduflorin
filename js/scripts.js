
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

function toggle_light_mode() {
  var app = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "dark") {
      localStorage.lightMode = "light";
      app.setAttribute("light-mode", "light");
  } else {
      localStorage.lightMode = "dark";
      app.setAttribute("light-mode", "dark");
  }
}

window.addEventListener(
  "storage",
  function () {
      if (localStorage.lightMode == "dark") {
          app.setAttribute("light-mode", "dark");
      } else {
          app.setAttribute("light-mode", "light");
      }
  },
  false
);

$(function() {
  var button = $("button");
  var name = $("input[name=name]");

  name.keyup(function() {
    if (name.val().length > 0) {
      button.addClass('active');
    } else {
      button.removeClass('active');
    }
  });

  $("form").submit(function(event) {
    event.preventDefault();

    //get the form data
    var formData = {
      name: $("input[name=name]").val(),
      email: $("input[name=email]").val(),
      caps: $("input[name=text]").val()
    };

    // process the form
    $.ajax({
      type: "POST",
      url: "//jsonplaceholder.typicode.com/posts",
      data: formData,
      dataType: "json",
      encode: true
    }).done(function(data) {
      $(".response")
        .empty()
        .append(JSON.stringify(data, null, 2));
    });
  });
});


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