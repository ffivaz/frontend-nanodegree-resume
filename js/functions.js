/**
 * Sticky header example found there: http://jsfiddle.net/livibetter/HV9HM/
 */
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#navbar-anchor').offset().top;
    if (window_top > div_top) {
        $('#navbar').addClass('stick');
        $('#navbar').show();
    } else {
        $('#navbar').removeClass('stick');
        $('#navbar').hide();
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

/**
 * offset tip found at http://denverdias.com/2014/11/19/bootstrap-scrollspy-tips/
 */
$('body').scrollspy({selector: '.scrollclass', offset: 65});

/**
 * Smooth scrolling to anchor. Found here : http://stackoverflow.com/questions/7717527/jquery-smooth-scrolling-when-clicking-an-anchor-link
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