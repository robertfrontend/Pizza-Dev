// Funcion mostrar flotante
let botonAbrir = document.getElementById('abrirFlotante');

let divFlotante = document.querySelector('.divFlotante');

botonAbrir.addEventListener('click', mostrarFlotante);

function mostrarFlotante(e) {
    e.preventDefault();

    divFlotante.style.top = '-0px';

    divFlotante.style.transition = '.5s'
};

// ----validar formulario-----

let botonSubmit = document.querySelector('#divBoton #submit');

botonSubmit.addEventListener('click', enviarFormulario);

const verifica = document.createElement('p');

verifica.style.color = 'red';

function enviarFormulario() {
    
    const nombre = document.getElementById('nombre').value;
    
    const email = document.getElementById('email').value;
    
    const divVerficar = document.getElementById('verificar');
    
    //verficar que los campos esten completos
    if(nombre == "" ||email == ""){

        divVerficar.appendChild(verifica)
        verifica.innerText = 'Porfavor llena todos los campos';

        email.style.border = '1px solid red';

    }
    else {
        // alert('enviado')
        mostrarPizzaElegida();

        textoEle.innerHTML = 'Enviado Correctamente';

        document.querySelector('form').reset();

        verifica.innerHTML = '';
    }
    
}
//quitar flotante.
let botonQuitar = document.getElementById('cerrarFlotante'); 

botonQuitar.addEventListener('click', quitarFlotante);

function quitarFlotante(e) {

    e.preventDefault();

    divFlotante.style.top = '-1000px';

    verifica.innerHTML = '';

    document.querySelector('form').reset();
}

//---- mostrar pizza elegida ------

const botonElegirPizza = document.getElementById('mostrarPizzaElegida');

const divPizza = document.querySelector('.pizzaElegida');

const textoEle = document.getElementById('textoPedido');

function mostrarPizzaElegida() {

    divPizza.style.top = '-0';

    divPizza.style.transition = '.4s';

    textoEle.innerHTML = 'Tu pedido se ha realizado con exito'

}

//cerrar pizza elegida
let botonCerrarElegirPizza = document.getElementById('cerrarPizzaElegida');

botonCerrarElegirPizza.addEventListener('click', cerrarElegir);

function cerrarElegir(e) {
    e.preventDefault();

    divPizza.style.top = '-20000px';

}
