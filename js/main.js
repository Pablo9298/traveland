$(function () {

  var headerTop = $('.header__top');
  var doc = $(document);

  function headerFixed() {
    var threshold = doc.scrollTop() > 150;

    if (threshold) {
      headerTop.addClass('scrolled');
    } else {
      headerTop.removeClass('scrolled');
    }
  }
  $(window).on('scroll', headerFixed);

  headerFixed();

  $(".header__link, .logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

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
    $('.header__burger, .header__items, .header__booking').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__link, .header__logo').on('click', function() {
    $('.header__burger, .header__items, .header__booking').removeClass('active');
    $('body').removeClass('lock');
  });

});