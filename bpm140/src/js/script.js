$(document).ready(function(){
    $('.catalog__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png" alt="arrow"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png" alt="arrow"></img></button>'
    });
  });