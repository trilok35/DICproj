$(document).ready(function () {
    // Smooth Scrolling
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    // Form Validation
    $('.logInButton').on('click', function (event) {
        var email = $('.login1[type="text"]').val();
        var password = $('.login1[type="password"]').val();

        if (email === '' || password === '') {
            alert('Please enter both email and password.');
            event.preventDefault();
        }
    });

    // Toggle Navigation Menu
    $('.navbar').on('click', function () {
        $('.list1').slideToggle();
    });



    // Add hover effect to buttons
    $('.course1Button, .course2Button, .course3Button, .course4Button, .course5Button').hover(
        function () {
            $(this).addClass('buttonHover');
        },
        function () {
            $(this).removeClass('buttonHover');
        }
    );
});

