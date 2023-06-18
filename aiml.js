$(document).ready(function () {
    // Code to be executed once the document is ready

    // Example: Change the background color of the "Buy Now" button on hover
    $('.buyButton').hover(
        function () {
            $(this).css('background-color', 'green');
        },
        function () {
            $(this).css('background-color', '');
        }
    );

    // Example: Play/pause the video on click
    $('.videoaiml').click(function () {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });

    // Example: Fade in the heading and paragraphs
    $('.almlHeading, .headingPara, .learnHeading, .learnPara1, .learnPara2').hide().fadeIn(1500);

    // Example: Animate the demo video
    $('.demo').click(function () {
        $('.videoaiml').animate({ width: '400px', height: '400px' }, 1000);
    });

    // Example: Shake the "Buy Now" button on click
    $('.buyButton').click(function () {
        $(this).effect('shake', { distance: 5 });
    });

    // Example: Add a pulsating effect to the AL and ML image
    $('#almlimage').hover(
        function () {
            $(this).animate({ width: '220px', height: '220px' }, 'slow').effect('pulsate', { times: 3 }, 'slow');
        },
        function () {
            $(this).animate({ width: '200px', height: '200px' }, 'slow');
        }
    );
});
