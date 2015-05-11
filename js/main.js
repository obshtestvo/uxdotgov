$(document).ready( function () {
    $('p.first-p').addClass('first-ani');

    $('p.second-p').addClass('second-ani');

    $('form').addClass('third-ani');
});

$(function () {
    $('#subForm').submit(function (e) {
        e.preventDefault();
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert("Error: " + data.Message);
            } else { // 200
                $('div.form-success').addClass('scale-up');
                $('div.form-ui').addClass('scale-down');
            }
        });
    });
});
