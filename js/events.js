let front = document.getElementById('front');
let back = document.getElementById('back');
let others = document.getElementById('others');

front.addEventListener('click',function(){
    unselect();
    this.classList.add('selected')
    showContent('content1')
});
back.addEventListener('click',function(){
    unselect();
    this.classList.add('selected')
    showContent('content2')
});
others.addEventListener('click',function(){
    unselect();
    this.classList.add('selected')
    showContent('content3')
});


function unselect(){
    let botones = document.querySelectorAll('.botones');

    botones.forEach(btn => {
        btn.classList.remove('selected')
    })
}

function showContent(contentId) {
    // Ocultar todos los divs de contenido
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Mostrar el div de contenido seleccionado
    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');
}

window.addEventListener('scroll', scroll);

resize();
scroll();
handleScroll();

window.addEventListener('resize',resize)

function resize(){

    let portada = document.getElementById('portada');
    let alturaPantalla = window.innerHeight;

    portada.style.height = alturaPantalla + 'px';
    
}

// Variables para detectar el desplazamiento
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Detecta si la dirección del scroll es hacia abajo y si el scroll está en la parte superior
    if (currentScrollY > lastScrollY && lastScrollY === 0) {
        window.scrollTo({
            top: document.getElementById('navbar').offsetTop,
            behavior: 'smooth'
        });
    }

    // Actualiza la posición del último scroll
    lastScrollY = currentScrollY;
});

function scroll(){
    const breadcrumb = document.getElementById('breadcrumb');
    let alturaPantalla = window.innerHeight;
    let alturaNavbar = document.getElementById('navbar');
    
    if (window.scrollY > 0) {
      breadcrumb.style.top = alturaPantalla/4 + 'px';
    } else {
      breadcrumb.style.top = (alturaPantalla/4) - alturaNavbar.offsetHeight + 'px';
    }
}

let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let texto = document.querySelector('.scroll-indicator .scroll-text')
let flechas = document.querySelector('.scroll-indicator .arrows')
if (isMobile) {    
    texto.innerHTML = 'Deslice hacia arriba';
    flechas.classList.add('rotar');
}else{
    texto.innerHTML = 'Deslice hacia abajo';
    flechas.classList.remove('rotar');
}

// Función para manejar el evento de desplazamiento
function handleScroll() {

    let allBeadcrumbs = document.querySelectorAll('#breadcrumb img');

    allBeadcrumbs.forEach(item =>{
        item.classList.remove('seleccionado')
    })

    // Obtener la posición del elemento con id "skills"
    let mvv = document.getElementById('mvv');
    let mvvPosition = mvv.getBoundingClientRect().top;
    let skills = document.getElementById('skills');
    let skillsPosition = skills.getBoundingClientRect().top;
    let projects = document.getElementById('projects');
    let projectsPosition = projects.getBoundingClientRect().top;
    let contact = document.getElementById('contact');
    let contactPosition = contact.getBoundingClientRect().top;
    
    // Altura específica en la pantalla (en píxeles) donde quieres lanzar el evento
    let alturaEspecifica = 300; // Puedes ajustar este valor según tus necesidades
    
    // Obtener la posición actual de desplazamiento de la ventana
    let scrollPosition = window.scrollY || window.pageYOffset;

    // Comparar la posición del elemento con la posición de desplazamiento de la ventana
    if (mvvPosition < alturaEspecifica) {
        // Lanzar el evento cuando el elemento está a la altura específica
        let breadmvv = document.querySelector('#breadcrumb .mvv')
        breadmvv.classList.add('seleccionado');
        
    }

    if (skillsPosition < alturaEspecifica) {
        // Lanzar el evento cuando el elemento está a la altura específica
        let breadSkill = document.querySelector('#breadcrumb .skill')
        breadSkill.classList.add('seleccionado');
        // Aquí puedes agregar más acciones o llamar a funciones según tus necesidades
    }

    if (projectsPosition < alturaEspecifica) {
        // Lanzar el evento cuando el elemento está a la altura específica
        let breadprojects = document.querySelector('#breadcrumb .projects')
        breadprojects.classList.add('seleccionado');
        // Aquí puedes agregar más acciones o llamar a funciones según tus necesidades
    }

    if (contactPosition < alturaEspecifica) {
        // Lanzar el evento cuando el elemento está a la altura específica
        let breadposition = document.querySelector('#breadcrumb .contact')
        breadposition.classList.add('seleccionado');
        // Aquí puedes agregar más acciones o llamar a funciones según tus necesidades
    }
}

// Agregar un event listener para el evento de desplazamiento
window.addEventListener('scroll', handleScroll);

let prev = document.querySelector('.carousel-control-prev');
prev.addEventListener('click', function() {
    // Verificar si la API de Vibración está disponible
    if (navigator.vibrate) {
      // Hacer vibrar el dispositivo durante 200 milisegundos
      navigator.vibrate(1000);
    } else {
      console.log("La API de Vibración no está disponible en este dispositivo.");
    }
});

let next = document.querySelector('.carousel-control-next');
next.addEventListener('click', function() {
    // Verificar si la API de Vibración está disponible
    if (navigator.vibrate) {
      // Hacer vibrar el dispositivo durante 200 milisegundos
      navigator.vibrate(1000);
    } else {
      console.log("La API de Vibración no está disponible en este dispositivo.");
    }
});
