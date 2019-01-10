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



    // Progress Bar
    var els = $(".progress-bar");
    for (i = 0; i < els.length; i++) { 
        var el = $(els[i]);

        el.animate({
            width: el.data('valuenow')+'%'
        }, 2000 );
    }

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