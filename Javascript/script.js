

$(".myslider").owlCarousel({
    
    autoplay:true,
    loop:true,
    nav:false,
    animateOut:'fadeOut',
    animateIN:'fadeIn',
    navText:["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
     responsive:{
        0:{
            items:1,
            
        },
        320:{
            items:1
        },
        768:{
           items:3
        },
        992:{
            items:4,
            dots:true
        },
        1200:{
            items:4,
            dots:true
        }
    }
});


$('.slider').owlCarousel({
    items:1,
    navText:["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
    loop:true,
    nav:true,
    dots:false
});




$('.scroll').owlCarousel({
    loop:true,
    navText:["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            
        },
        320:{
            items:1
        },
        768:{
           items:2,
           margin:20
        },
        992:{
            items:2,
            margin:30
            
        },
        1200:{
            items:4,
            
        }
    }
});
$('.scroll .owl-nav').css({
    'position': 'absolute',
    'top': '-50px',
    'right': '0',
    'left': 'auto'
});

$('.video-slider').owlCarousel({
    loop: true,
    margin: 0,
    navText:["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout:5000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1,
            
        },
        320:{
            items:1
        },
        768:{
           items:3,
        },
        992:{
            items:3,
            
        },
        1200:{
            items:3,
            
        }
    }
});

var owl = $('.myslider');

owl.owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    items: 3,
    slideBy: 1,
    center: true,
    autoplay: true,
    autoplayTimeout: 800,
    autoplayHoverPause: true,
    smartSpeed: 800,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


