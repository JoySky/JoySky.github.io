$(document).ready(function() {
    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').animate({opacity:"show"}, 400);
            } else {
                $('#back-top').animate({opacity:"hide"}, 400);
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});
