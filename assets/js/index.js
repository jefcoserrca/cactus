var is_open = false;
$('#menu-btn').on('click', function() {
    if (is_open) {
        $('header').removeClass('header--extend');
        $('.header__container--button').removeClass('txt-right');
        $('#navbar-links').removeClass('header__nav--extend');
        $('#navbar-links').addClass('header__nav');
        $('#menu-btn span').removeClass('icon-close');
        $('#menu-btn span').addClass('icon-menu');
        $('.container__blur').addClass('hide');
        $('#lenguaje-selector').addClass('hide');
    } else {
        $('header').addClass('header--extend');
        $('.header__container--button').addClass('txt-right');
        $('#navbar-links').addClass('header__nav--extend');
        $('#navbar-links').removeClass('header__nav');
        $('#menu-btn span').removeClass('icon-menu');
        $('#menu-btn span').addClass('icon-close');
        $('.container__blur').addClass('hide');
        $('#lenguaje-selector').removeClass('hide');
        $('.container__blur').removeClass('hide');

    }
    is_open = !is_open;
})