$(function () {

    // burger
    // $('.header__menu-burger, .header__menu-list').on('click', function(){
    //   $('.header__menu-burger').toggleClass('active');
    // });

    // $('.header__menu-burger, .header__menu-list').click( function(){
    //     $('.header__menu-list').slideToggle();
    //   });

    new WOW().init();



    var scene = document.getElementById('scene');
    parallaxInstance = new Parallax(scene);
    parallaxInstance = new Parallax(scene1);
    parallaxInstance = new Parallax(scene2);
    parallaxInstance = new Parallax(scene4);
    parallaxInstance = new Parallax(scene5);


    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.header__top').toggleClass('static', $(this).scrollTop() > 800);
        } else {
            $('.header__top').removeClass('static');
        }
    })

    $('input, select').styler();

    var galleryThumbs = new Swiper('.product__thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        thumbs: {
          swiper: galleryTop
        }
      });
      var galleryTop = new Swiper('.product__top', {
        slidesPerView: 1,
        thumbs: {
          swiper: galleryThumbs
        }
      });





    // var scene = document.getElementById('scane1');
    // var parallaxInstance = new Parallax(scene1);

});