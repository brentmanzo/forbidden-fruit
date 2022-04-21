$('#mtcMain').each(function () {
    $(this).carousel({
        interval: false
    });
});

$('a[data-slide="prev"]').click(function () {
    $('#mtcMain').carousel('prev');
});

$('a[data-slide="next"]').click(function () {
    $('#mtcMain').carousel('next');
});