$(function () {


  $('.header__burger, .header__list').on('click', function () {
    $('.header__burger, .header__list').toggleClass('active');
  });

  
  $('.header__burger, .header__list').click(function () {
    $('.header__menu-list').slideToggle();
    $('body').removeClass();
  });

    $('.header__burger').on('click', function () {
      $('body').toggleClass('oh');
  });

  new WOW().init();




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

  var swiper = new Swiper('.reviews__swiper', {
    swiperContainer: '.reviews__swiper',
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      }
    }
  });

  $('.wrapper .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.questions__title').on('click', function () {

    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().toggleClass('questions__item--active')
  });

  var scene = document.getElementById('scene');
  parallaxInstance = new Parallax(scene);
  parallaxInstance = new Parallax(scene1);
  parallaxInstance = new Parallax(scene2);
  parallaxInstance = new Parallax(scene4);
  parallaxInstance = new Parallax(scene5);
  parallaxInstance = new Parallax(scene6);
  parallaxInstance = new Parallax(scene7);
  parallaxInstance = new Parallax(scene8);
  parallaxInstance = new Parallax(scene9);
  parallaxInstance = new Parallax(scene10);

});