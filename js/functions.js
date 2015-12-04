/**
 * Sticky header example found there: http://jsfiddle.net/livibetter/HV9HM/
 */
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#navbar-anchor').offset().top;
    if (window_top > div_top) {
        $('#navbar').addClass('stick');
    } else {
        $('#navbar').removeClass('stick');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

/**
 * offset tip found at http://denverdias.com/2014/11/19/bootstrap-scrollspy-tips/
 */

$('body').scrollspy({selector:'.scrollclass',offset:65});
