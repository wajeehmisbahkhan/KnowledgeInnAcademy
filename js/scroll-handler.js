var counterRun = false;
$(document).scroll(function (e) {
    var scroll = $(window).scrollTop(),
        current = $('.current');
    
    var heights = [$('.home').height()-$('header').height()-20];
    heights.push(heights[0] + $('.about-us').height() + $('.counter').height()-20);
    heights.push(heights[1] + $('.timeline').height()-30);
    heights.push(heights[2] + $('.core-team').height()+$('.timeline').height()/2);
    heights.push(heights[3] + $('.courses').height()/2);
    heights.push(heights[4] + $('.careers').height() + $('.careers').height()/2-10);
    heights.push(heights[5] + $('.contact').height()+20);
    for (var i = 0; i < heights.length; i++) {
        if (scroll >= heights[i]) {
            if (current.index() !== i) {
                current.removeClass('current');
                current = current.siblings(':nth-child('+(i+1)+')');
                current.addClass('current');
                checkCurrent();
            }
        }
    }
    //Counter Check
    if (scroll >= heights[0]+$('.about-us').height()+$('.counter').height()+20 && !counterRun) {
        runCounter();
        counterRun = true;
    }
});