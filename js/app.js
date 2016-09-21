/****************************************************************************************************
 * I Don't Know Where Did I Get This Code But,                                                     *
 * I Really Liked To Improve Some Bugs So I Added 2 Lines Java Script Codes And A CSS Class        *
 * You Can Find The CSS Class Named 'after-scroll'                                                 *
 * http://webgo.ir                                                                                 *
 * Sadegh Alirezaie                                                                                *
 ***************************************************************************************************/
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').height($('#sticky').outerHeight());
        $('#sticky-anchor').addClass('after-scroll'); //Added By Sadegh Alirezaie
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').removeClass('after-scroll'); //Added By Sadegh Alirezaie
        $('#sticky-anchor').height(0);
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
