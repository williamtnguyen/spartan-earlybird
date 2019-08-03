/* NAVBAR */

//Navbar Color Fade
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

//Navbar Active Tab State
$('#mainNavbar .navbar-nav a').on('click', function () {
    $('#mainNavbar .navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});