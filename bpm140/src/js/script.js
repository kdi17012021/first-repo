$(document).ready(function(){
    $('.catalog__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png" alt="arrow"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png" alt="arrow"></img></button>'
    });

    $('ul.catalog-tabs__tabs').on('click', 'li:not(.catalog-tabs__tabs__tab-active)', function() {
        $(this)
          .addClass('catalog-tabs__tabs__tab-active').siblings().removeClass('catalog-tabs__tabs__tab-active')
          .closest('div.container').find('div.catalog-tabs__items').removeClass('catalog-tabs__items_active').eq($(this).index()).addClass('catalog-tabs__items_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-tabs__items__item__wrapper-1').eq(i).toggleClass('catalog-tabs__items__item__wrapper-1_active');
                $('.catalog-tabs__items__item__wrapper-2').eq(i).toggleClass('catalog-tabs__items__item__wrapper-2_active');
            });
        });
    }

    toggleSlide('.catalog-tabs__items__item__link_1');
    toggleSlide('.catalog-tabs__items__item__link_2');


  });