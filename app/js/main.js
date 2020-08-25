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


    // var scene = document.getElementById('scane1');
    // var parallaxInstance = new Parallax(scene1);

});