const button = document.getElementById('daltonismButton');
const body = document.body;
const alert = document.querySelector('.alert');

let modeIndex = 0;
const modes = ['daltonism-protanopia', 'daltonism-deuteranopia', 'daltonism-tritanopia','daltonism-desactivado'];

function ocultarAlerta(){
    alert.style.display = 'none';
}

document.querySelector('.toggleButton').addEventListener('click', function() {
    let dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
});

function activarModo(modo) {

    body.classList.remove(...modes);

    switch(modo) {
        case 'protanopia':
            body.classList.add('daltonism-protanopia');
            break;
        case 'deuteranopia':
            body.classList.add('daltonism-deuteranopia');
            break;
        case 'tritanopia':
            body.classList.add('daltonism-tritanopia');
            break;
        case 'normal':
            body.classList.add('daltonism-desactivado');
            break;
    }

    let dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
    
    alert.style.display = 'block';
    button.innerText = `Activate ${modes[(modeIndex) % modes.length].replace('daltonism-', '')} Mode`;
    alert.innerText = `Mode ${modo} activated`;

    setTimeout(ocultarAlerta,1500);
}