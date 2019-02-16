

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
            principal: 'Olá, meu nome é Christiano Costa, sou desenvolvedor fullstack e designer de interface com base no Brasil.',
            text1: 'Eu sou um sonhador e fanático por todas as coisas digitais. Tenho muitos anos de experiência em desenvolvimento,  amo design minimalista e café.',
            text2: 'Atualmente com dezenas de sites e sistemas desenvolvidos, clientes nacionais e internacionais que confiaram em mim para o design, implementação e gerenciamento de seus produtos digitais.',
            experience: 'Experiências Profissionais',
            actual: 'atual',
            fullstackdev: 'Desenvolvedor full-stack',
            traineedev: 'Estagiário em desenvolvimento',
            academic: 'Acadêmico',
            skills: 'Conhecimentos',
            text3: 'Eu bebo café, eu como pizza. Eu escrevo códigos e aprimoro meu design e minhas habilidades todos os dias. Tenho a honra de trabalhar com pessoas especiais.',
            softdevelop: 'Desenvolvimento de Software',
            mobileapps: 'Aplicativos Mobile',
            requirements: 'Análise de Requisitos',
            devtecnics: 'Técnicas de desenvolvimento agil',
            english: 'Ingês',
            basic: 'básico',
            myportfolio: 'Meu Portifolio',
            text4: 'Eu bebo café, eu como pizza. Eu escrevo códigos e aprimoro meu design e minhas habilidades todos os dias. Tenho a honra de trabalhar com pessoas especiais.',
            seemore: 'veja mais',


        },
        'usa': {
            hi: 'Hi',
            myPortfolio: 'My Works'
        },
    };
    return text[type];
};

