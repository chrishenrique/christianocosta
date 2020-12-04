
var bra = document.getElementById('flag-brasil');    
var usa = document.getElementById('flag-usa');    

bra.addEventListener("click",function(e){
    translate('bra');
});

usa.addEventListener("click",function(e){
    translate('usa');
});

function translate(type) {
    console.log(type);
}

function getText(type) {
    var text = {
        'bra': {
            principal: 'Olá, meu nome é Christiano Costa, sou desenvolvedor fullstack e web designer.',
            text1: 'Eu sou um sonhador e fanático por todas as coisas digitais. Tenho muitos anos de experiência em desenvolvimento, amo design minimalista e café.',
            frontend: 'Dou vida aos dados através do uso de HTML, CSS e JavaScript e outros, para que os usuários possam visualizar e interagir com esses dados. Minha missão é projetar, construir e otimizar interfaces de projetos.',
            backend: 'Crio a lógica para fazer o aplicativo da web funcionar corretamente e conseguem isso por meio do uso de linguagens de script do lado do servidor como o PHP.<br>Sei como tornar os aplicativos da web funcionais, sou responsável ​​por otimizar o aplicativo em velocidade e eficiência. Além disso, crio soluções de armazenamento de dados em bancos de dados como MySql, Postgres, SqLite.',
            webdesign: 'Minha melhor parte do desenvolvimento é o processo de criação de sites, abranger vários aspectos diferentes, incluindo layout de página da Web/app, produção de conteúdo e design gráfico.',
            uiux: 'Também sou consumidor de muitos sites e apps, e quado me deparo com algum que não foi bem pensado tanto na visualização, na utilização e como na interação, penso em nunca mais voltar... Lua me aguarde!!!',
            photograph: 'Uma imagem vale mais que 1000 palavras e isso me fascina...',
            freelancer: 'Atualmente com dezenas de sites e sistemas desenvolvidos, clientes nacionais e internacionais que confiaram em mim para o design, implementação e gerenciamento de seus produtos digitais.',
            music: 'Eu acredito que todo guitarrista tem algo de único em sua forma de tocar. Eles só precisam identificar o que os torna diferentes e desenvolver isso.',
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
            principal: 'Hi, my name is Christiano Costa, I am a fullstack developer and web designer.',
            text1: 'I am a dreamer and fanatic about all things digital. I have many years of development experience, love minimalist design and coffee',
            frontend: 'I bring data to life through the use of HTML, CSS and JavaScript and others, so that users can view and interact with that data. My mission is to design, build and optimize project interfaces.',
            backend: 'I create the logic to make the web application work correctly and they do this through the use of server-side scripting languages like PHP.<br>I know how to make web applications functional, I am responsible for optimizing the application in speed and efficiency. In addition, I create data storage solutions in databases like MySql, Postgres, SqLite.',
            webdesign: 'My best part of the development is the website creation process, covering several different aspects, including webpage / app layout, content production and graphic design.',
            uiux: 'I am also a consumer of many websites and apps, and when I come across one that was not well thought out in terms of visualization, use and interaction, I think of never returning ... Moon wait for me !!!',
            photograph: 'A picture is worth more than 1000 words and it fascinates me ...',
            freelancer: 'Currently with dozens of websites and systems developed, national and international clients have trusted me for the design, implementation and management of their digital products.',
            music: 'I believe every guitar player inherently has something unique about their playing. They just have to identify what makes them different and develop it.',
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

