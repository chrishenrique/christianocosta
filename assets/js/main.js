$(document).ready(function () {
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