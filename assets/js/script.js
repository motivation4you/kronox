document.body.onload = function() {
    setTimeout(function() {
        let preloader = document.getElementById('preloader');

        if ( !preloader.classList.contains('done') ) {
            preloader.classList.add('done');
        }
        new WOW().init();
    }, 1000);
}

$('a.menu').click(() => {
    let rocket = $('.anim-section>.rocket');
    
    if($(window).scrollTop() > 10) {
        $('.sidebar').css('transform', 'translateX(0)');
            $('.fade').css({
                'visibility': 'visible',
                'opacity': '1'
            });
    } else {
        rocket.css({
            'animation': 'rocket-menu 2s ease-in-out'
        });
        setTimeout(() => {
            rocket.css('transform', 'translateX(-13vw) translateY(-26vh) scale(0)');
            $('.sidebar').css('transform', 'translateX(0)');
            $('.fade').css({
                'visibility': 'visible',
                'opacity': '1'
            });
        }, 2000);
    }
    return false;
});

$('a.close').click(() => {
    let rocket = $('.anim-section>.rocket');
        $('.sidebar').css('transform', 'translateX(-100%)');
        $('.fade').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
    if($(window).scrollTop() > 10) {

    } else {
        $('.sidebar').css('transform', 'translateX(-100%)');
        $('.fade').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
        setTimeout(() => {
            rocket.css({
                'animation': 'rocket-back 2s ease-in-out'
            });
        } , 500);
        setTimeout(() => {
            rocket.css({
                'transform': 'translateX(0) translateY(0) scale(1) rotate(45deg)',
                'animation': 'rocket-fly 2s ease-in-out infinite'
            })
        }, 2500);
    }
    return false;
});

$('.sidebar li').click(() => {
    let rocket = $('.anim-section>.rocket');
        $('.sidebar').css('transform', 'translateX(-100%)');
        $('.fade').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
    if($(window).scrollTop() > 10) {

    } else {
        $('.sidebar').css('transform', 'translateX(-100%)');
        $('.fade').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
        setTimeout(() => {
            rocket.css({
                'animation': 'rocket-back 2s ease-in-out'
            });
        } , 500);
        setTimeout(() => {
            rocket.css({
                'transform': 'translateX(0) translateY(0) scale(1) rotate(45deg)',
                'animation': 'rocket-fly 2s ease-in-out infinite'
            });
        }, 2500);
    }
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 10) {
        $('section.header nav.top-menu .wrapper').css({
            'min-height': '70px',
        });
        $('section.header nav.top-menu').css('background', '#fff');
        $('section.header nav.top-menu ul li a').css('color', '#0d1530');
        $('section.header a.menu').css('top', '15px');
    }
    else {
        $('section.header nav.top-menu .wrapper').css({
            'min-height': '60px',
            'background-color': 'transparent'
        });
        $('section.header nav.top-menu').css('background', 'transparent');
        $('section.header nav.top-menu ul li a').css('color', '#fff');
        $('section.header a.menu').css('top', '15px');
    }
});

let slidesPerView;

if(document.body.offsetWidth <= 940) {
    slidesPerView = 1
} else {
    slidesPerView = 2
}

var mySwiper2 = new Swiper('#swiper-container2', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: slidesPerView,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
})
var swiper = new Swiper('#vertical-swiper', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 200;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 2000);
    e.preventDefault();
  });