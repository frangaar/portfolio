const button = document.getElementById('daltonismButton');
const body = document.body;
const alert = document.querySelector('.alert');
let dropdownMenu = document.getElementById('dropdownMenu');

let modeIndex = 0;
const modes = ['daltonism-protanopia', 'daltonism-deuteranopia', 'daltonism-tritanopia','daltonism-desactivado'];

function ocultarAlerta(){
    alert.style.display = 'none';
}

document.querySelector('.toggleButton').addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
});

document.querySelector('#contenido').addEventListener('click', function() {
    if(dropdownMenu.classList.contains('show')){
        dropdownMenu.classList.toggle('show');
    }
    
});

function activarModo(modo) {

    let contenido = document.getElementById('contenido');
    contenido.classList.remove(...modes);

    switch(modo) {
        case 'protanopia':
            contenido.classList.add('daltonism-protanopia');
            break;
        case 'deuteranopia':
            contenido.classList.add('daltonism-deuteranopia');
            break;
        case 'tritanopia':
            contenido.classList.add('daltonism-tritanopia');
            break;
        case 'normal':
            contenido.classList.add('daltonism-desactivado');
            break;
    }

    let dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
    
    alert.style.display = 'block';
    button.innerText = `Activate ${modes[(modeIndex) % modes.length].replace('daltonism-', '')} Mode`;
    alert.innerText = `Mode ${modo} activated`;

    setTimeout(ocultarAlerta,1500);
}