$(function () {

  $(".slider__star").rateYo({
    numStars: 1,
    readOnly: true,
    normalFill: "#FFC700",
    starWidth: "24px"
  });

  $(".slider__items").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    dots: true,
    arrows: true,
  });

});