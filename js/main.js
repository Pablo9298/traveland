$(function () {

  $(".slider__star").rateYo({
    numStars: 1,
    readOnly: true,
    normalFill: "#FFC700",
    starWidth: "24px"
  });

  $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    arrows: true,
    responsive: [{
        breakpoint: 1458,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });

  $('.header__burger').on('click', function() {
    $('.header__burger, .header__items').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__link, .header__logo').on('click', function() {
    $('.header__burger, .header__items').removeClass('active');
    $('body').removeClass('lock');
  });

});