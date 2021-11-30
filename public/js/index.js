$('#dropdown-menue li').on('click', function(){
    $('#wedding').val($(this).text());
    $('#engagement').val($(this).text());
    $('#birthday').val($(this).text());
    $('#christening').val($(this).text());
    $('#hens').val($(this).text());
    $('#bachelor').val($(this).text());
    $('#other').val($(this).text());
});