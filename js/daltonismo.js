const button = document.getElementById('daltonismButton');
const body = document.body;
const alert = document.querySelector('.alert');

let modeIndex = 0;
const modes = ['daltonism-protanopia', 'daltonism-deuteranopia', 'daltonism-tritanopia','daltonism-desactivado'];

button.addEventListener('click', () => {
    // Remove current mode
    body.classList.remove(...modes);
    
    // Apply next mode
    modeIndex = (modeIndex + 1) % modes.length;
    body.classList.add(modes[modeIndex]);
    
    alert.style.display = 'block';
    button.innerText = `Activate ${modes[(modeIndex) % modes.length].replace('daltonism-', '')} Mode`;
    alert.innerText = `Mode ${modes[(modeIndex) % modes.length].replace('daltonism-', '')} activated`;

    setTimeout(ocultarAlerta,1500);
});

function ocultarAlerta(){
    alert.style.display = 'none';
}