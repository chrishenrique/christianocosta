

var bra = document.getElementById('flag-brasil');    
var usa = document.getElementById('flag-usa');    

bra.addEventListener("click",function(e){
    translate('bra');
});

usa.addEventListener("click",function(e){
    translate('usa');
});

function translate(type) {
    var source   = App.main.innerHTML;
    var template = Handlebars.compile(source);
    console.log(App.main.innerText);
    var data = getText(type);
    document.getElementById('main').innerHTML = template(data);  
    console.log(App.main.innerText);
}

function getText(type) {
    var text = {
        'bra': {
            hi: 'Oi'
        },
        'usa': {
            hi: 'Hi'
        },
    };
    return text[type];
};

