//loading
$(window).on('load', function () {
    $('#loading').fadeOut(800);
    $('.topFadeIn').css('opacity', '1');
    $('.topFadeIn').css('transform', 'translateX(0)');
});

function stopload() {
    $('#loader').fadeOut(800);

}
$(function () {
    setTimeout('stopload()', 8000);
});

//slide
$(function () {
    let number = 0;

    setInterval(function () {
        $(".slide li").css({
            opacity: 0,
        });
        if (number < 3) {
            number = number + 1;
        } else {
            number = 0;
        }
        $(".slide li").eq(number).css({
            opacity: 1,
        });
    }, 5000);
});

//fade in
$(function () {
    $(window).scroll(function () {
        $('.fadeIn').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });
});

// turn to dark image
$(function(){
    if ($(window).width() > 768) {
        $(window).scroll(function(){
            $('.bgDark').each(function () {
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight) {
                    $(this).addClass('turnDark');
                }
            })
        })
    }
})