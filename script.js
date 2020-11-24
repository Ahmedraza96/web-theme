$(document).ready(function () {
    $('#name').blur(function () {
        var value = $(this).val();

        var check = 1;

        for (var i = 0; i < value.length; i++) {
            if (value[i] >= 0 && value[i] <= 9) {
                check = 0;
            }
        }
            if (check == 1) {
                alert('Enter a valid name')
        }
    })
})