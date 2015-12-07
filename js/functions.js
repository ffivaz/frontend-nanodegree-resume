/**
 * Sticky header. Inspiration from http://jsfiddle.net/livibetter/HV9HM/
 */
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#navbar-anchor').offset().top;
    if (window_top > div_top) {
        $('#navbar').addClass('stick')
            .fadeIn('slow');
    } else {
        $('#navbar').removeClass('stick')
            .hide();
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

/**
 * offset of bootstrap scrollspy with fixed header. Inspiration from http://denverdias.com/2014/11/19/bootstrap-scrollspy-tips/
 */
$('body').scrollspy({selector: '.scrollclass', offset: 65});

/**
 * Smooth scrolling to anchor. Inspiration from http://stackoverflow.com/questions/7717527/jquery-smooth-scrolling-when-clicking-an-anchor-link
 */
$( document ).ready(function() {
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});
