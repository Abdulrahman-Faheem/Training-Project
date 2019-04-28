$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:120,
        autoWidth: true,
        autoplay:true,
        items:1,
        margin:5,
        stagePadding:500,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});
          