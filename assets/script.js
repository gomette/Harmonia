$(window).bind("resize", function () {
    // console.log($(this).width())
    if ($(this).width() < 768) {
        $('a').removeClass('circle-hover')
    } else{
        $('.nav-link').addClass('circle-hover')
    }
}).trigger('resize');