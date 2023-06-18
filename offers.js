$(document).ready(function () {
    $('.offerLink').click(function (e) {
        e.preventDefault();

        var offerDescription = $(this).siblings('.offerDescription').text();
        var offerDetails = offerDescription.split('; ');

        var detailsList = $('.details-box .offerDetails');
        detailsList.empty();

        $.each(offerDetails, function (index, detail) {
            detailsList.append('<li>' + detail + '</li>');
        });

        $('.details-box').slideToggle();
    });
});
