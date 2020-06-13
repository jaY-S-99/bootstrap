$(document).ready(function () {
    $('#myCarousel').carousel({ interval: 1000 });
    $('#carousel-button').click(function () {
        if ($(this).children('span').hasClass('fa-play')) {
            $('.carousel').carousel('cycle');
        }
        else {
            $('.carousel').carousel('pause');
        }
        $('#carousel-button span').toggleClass('fa-pause');
        $('#carousel-button span').toggleClass('fa-play');
    });
    $('#loginLink').click(function () {
        $('#loginModal').modal('show');
    });
    $('#tableReservationButton').click(function () {
        $('#formReservationModal').modal('show');
    });
})