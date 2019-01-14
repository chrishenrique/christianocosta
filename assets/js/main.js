$(document).ready(function () {
    // HandleBars
    var source   = $("body").html();
    var template = Handlebars.compile(source);
    var data = getText();
    // $("body").html(template(data));
    console.log('aqui');

    function getText() {
        return {
        }
    };


    // Flag
    var $flagBr = $('#flag-brasil').find('img');
    var $flagUs = $('#flag-usa').find('img');
    $flagBr.click(function(ev){
        ev.preventDefault();
        $flagUs.removeClass('flag-active');
        $flagBr.addClass('flag-active');
    });

    $flagUs.click(function(ev){
        ev.preventDefault();
        $flagUs.addClass('flag-active');
        $flagBr.removeClass('flag-active');
    });
    

});