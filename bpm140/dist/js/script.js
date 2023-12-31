$(document).ready(function(){
    $('.catalog__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png" alt="arrow"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png" alt="arrow"></img></button>'
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

    //modals

    $("[data-modal=consultation]").on('click', function (){
        $('.shading, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function (){
        $('.shading, .modal').fadeOut('slow');
    });

    $('.button_small').each(function(i) {
        $(this).on('click', function() {
            $('#buy .modal__descr').text($('.catalog-tabs__items__item__title').eq(i).text());
            $('.shading, #buy').fadeIn('slow');
        })
    });


    function validateForm(form){
        $(form).validate({
            errorClass: "invalid",
            rules: {
                name: "required",
                phone: {
                    required: true,
                    // minlength: 10,
                    // maxlength: 10
                },
                email: {
                  required: true,
                  email: true
                }
              },
            messages: {
                name: "Без имени форма не отправится",
                email: {
                  required: "Без email форма не отправится",
                  email: "Введите адрес типа 'primer@ya.ru'"
                },
                phone: {
                    required:"Форма нужна чтобы собирать телефоны",
                    // minlength: jQuery.validator.format("Телефон состоит из {0} символов"),
                    // maxlength: jQuery.validator.format("Телефон состоит из {0} символов"),
                }
              }
            
        });
    }

    validateForm("#consultForm");
    validateForm("#modalForm");
    validateForm("#buyForm");



    $('input[name="phone"]').mask("+7 (999) 999-99-99");


    $('form').submit(function(e) {
        e.preventDefault();

        if(!$(this).valid()){
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #buy').fadeOut();
            $('.shading, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });



    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.up-button').fadeIn();
        } else {
            $('.up-button').fadeOut();
        }
    });

     // Add smooth scrolling to all links
    $("a[href=#up]").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
        });
        } // End if
    });


    // $("a[href=#up]").click(function(){
    //     const _href = $(this).attr("href");
    //     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    //     return false;
    // });
    new WOW().init();
      
  });