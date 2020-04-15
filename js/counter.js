function runCounter () {
    $('.count').each(function () {
        var plus = false;
        if ($(this).text() != parseInt($(this).text()))
            plus = true;
        $(this).prop('Counter',0).animate({
            Counter: parseInt($(this).text())
        }, {
            duration: 2500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            },
            complete: function () {
                if (plus)
                    $(this).html($(this).text() + '+');
            }
        });
});
}