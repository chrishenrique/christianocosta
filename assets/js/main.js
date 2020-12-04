
$(document).ready(function () {

    // Jquery Translate
    // var translator = $('body').translate({lang: "pt", t: dict});
    $('.remove').remove();

    // Flag
    var $flagBr = $('#flag-brasil');
    var $flagUs = $('#flag-usa');
    $flagBr.on('click',function(ev){
        ev.preventDefault();
        translator.lang("pt");
        $flagUs.find('img').removeClass('flag-active');
        $flagBr.find('img').addClass('flag-active');
    });

    $flagUs.click(function(ev){
        ev.preventDefault();
        translator.lang("en");
        $flagUs.find('img').addClass('flag-active');
        $flagBr.find('img').removeClass('flag-active');
    });
    

});