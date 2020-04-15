$('.team').slick({
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            infinite: true,
            arrows: false,
            slidesToShow: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            infinite: true,
            arrows: false,
            slidesToShow: 1
        }
        }
    ]
});

var maxHeight = 0;

$(".member").each(function(){
    if ($(this).height() > maxHeight)
        maxHeight = $(this).height();
});

$(".member").height(maxHeight);