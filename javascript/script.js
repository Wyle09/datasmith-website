$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        // play: 5000,
        pagination: false
    });

    // var typed = new Typed(".typed", {
    //     strings: ["Process Optimization", "Software Package Selection", "Benefit Consulting"],
    //     typeSpeed: 70,
    //     loop: true,
    //     startDelay: 1000,
    //     showCursor: false
    // });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3                
            },
            938: {
                items: 4
            }
        }
    });
});