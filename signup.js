$(document).ready(function () {

    $('button.signupButton').click(function (e) {
        e.preventDefault();
        validateForm();
    });

    // Form validation
    function validateForm() {
        var name = $('#name').val();
        var email = $('#Email').val();
        var mobile = $('#mobile').val();
        var password1 = $('#password1').val();
        var password2 = $('#password2').val();


        if (name === '' || email === '' || mobile === '' || password1 === '' || password2 === '') {
            alert('Please fill in all fields');
            return;
        }



        $('#name').val('');
        $('#Email').val('');
        $('#mobile').val('');
        $('#password1').val('');
        $('#password2').val('');

        alert('SignedUp Successfully!');
    }
});
