

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
    var data = getText(type);
    document.getElementById('main').innerHTML = template(data);  
}

function getText(type) {
    var text = {
        'bra': {
            principal: 'Olá, meu nome é Christiano Costa, sou desenvolvedor fullstack e web designer.',
            text1: 'Eu sou um sonhador e fanático por todas as coisas digitais. Tenho muitos anos de experiência em desenvolvimento, amo design minimalista e café.',
            text2: 'Atualmente com dezenas de sites e sistemas desenvolvidos, clientes nacionais e internacionais que confiaram em mim para o design, implementação e gerenciamento de seus produtos digitais.',
            experience: 'Experiências Profissionais',
            actual: 'atual',
            fullstackdev: 'Desenvolvedor full-stack',
            traineedev: 'Estagiário em desenvolvimento',
            academic: 'Acadêmico',
            fumec: 'Bacharelando em Ciência da Computação pela Universidade FUMEC',
            loked: 'curso trancado',
            udemy: 'Curso de ReactNative pela Udemy - 2019.',
            skills: 'Conhecimentos',
            text3: 'Eu aprimoro meu código, meu design e minhas habilidades todos os dias.',
            softdevelop: 'Desenvolvimento de Software',
            mobileapps: 'Aplicativos Mobile',
            requirements: 'Análise de Requisitos',
            devtecnics: 'Técnicas de desenvolvimento agil',
            english: 'Ingês',
            basic: 'básico',
            myportfolio: 'Meu Portifolio',
            text4: 'Eu bebo café, eu como pizza. Tenho a honra de trabalhar com pessoas especiais.',
            seemore: 'veja mais',
            myhobbies: 'Meus hobbies',
            coffee: 'Café',
            music: 'Musica',
            podcasts: 'Podcast',
            movies: 'Filmes',
            series: 'Series',
            guitar: 'Guitarra',
            photography: 'Fotografia',
            gym: 'Acadêmia',

        },
        'usa': {
            principal: 'Hi, my name is Christiano Costa, I am fullstack developer and web designer.',
            text1: 'I am a dreamer and fanatic about all things digital. I have many years of development experience, love minimalist design and coffee',
            text2: 'Currently with dozens of websites and systems developed, national and international clients have trusted me for the design, implementation and management of their digital products.',
            experience: 'Professional Experiences',
            actual: 'current',
            fullstackdev: 'Full-stack Developer',
            traineedev: 'Developer trainee',
            academic: 'Academic',
            fumec: 'Bachelor of Science in Computer Science by University FUMEC in Brazil.',
            loked: 'locked course',
            udemy: 'ReactNative course by Udemy - 2019.',
            skills: 'Knowledge',
            text3: 'I improve my code, my design and my skills every day.',
            softdevelop: 'Software development',
            mobileapps: 'Mobile Applications',
            requirements: 'Requirements Analysis',
            devtecnics: 'Agile Development Techniques',
            english: 'English',
            basic: 'basic',
            myportfolio: 'My portfolio',
            text4: 'I drink coffee, I eat pizza. I have the honor of working with special people.',
            seemore: 'see more',
            myhobbies: 'My hobbies',
            coffee: 'Coffee',
            music: 'Music',
            podcasts: 'Podcast',
            movies: 'Movies',
            series: 'Series',
            guitar: 'Guitar',
            photography: 'Photography',
            gym: 'Gym',


        },
    };
    return text[type];
};

