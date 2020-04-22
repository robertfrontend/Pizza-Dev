// Funcion mostrar flotante
let botonAbrir = document.getElementById('abrirFlotante');// boton abrir flotante
let divFlotante = document.querySelector('.divFlotante'); // div flotante
botonAbrir.addEventListener('click', mostrarFlotante); //evento para abrir flotante

function mostrarFlotante(e) { // funcion abrir flotante
    e.preventDefault();
    divFlotante.style.top = '-0px';
    divFlotante.style.transition = '.5s';

};

// ----validar formulario-----

let botonSubmit = document.querySelector('#divBoton #submit'); //boton enviar
botonSubmit.addEventListener('click', enviarFormulario);//evento para enviar formulario
const verifica = document.createElement('p');//alerta de verificacion

//funcion para enviar formulario
function enviarFormulario() { 

    //obtener los datos del formulario
    const nombre = document.getElementById('nombre').value; // valor de nombre
    const email = document.getElementById('email').value; // valor del email
    const divVerficar = document.getElementById('verificar');
    
    //verficar que los campos esten completos
    if(nombre == "" || email == ""){ //llamar al verificar si los campos estan vacios
        
        divVerficar.appendChild(verifica)
        verifica.innerText = 'Porfavor llena todos los campos';
        verifica.style.color = 'red';

    }else { // si todo esta lleno ejecuta esta funcion

        // alert('enviado')
        mostrarPizzaElegida();

        //llamar al elemento pizza elegida
        textoEle.innerHTML = 'Enviado Correctamente';

        //resetear el formulario
        document.querySelector('form').reset();
        
        //llamar la funcion quitarFlotante se complete todos los campos y se envien
        // quitarFlotante();
    }
};

//----fin validar formulario----

//------Quitar flotante-------

let botonQuitar = document.getElementById('cerrarFlotante'); 
botonQuitar.addEventListener('click', quitarFlotante); // evento quitar flotante

//funcion quitar flotante
function quitarFlotante() {
    // e.preventDefault();

    divFlotante.style.top = '-100000px';
    verifica.innerHTML = ''; // quita la alerta verficar campos
    document.querySelector('form').reset(); // resetea el formulario cuando se cierra
};

//-----fin Quitar flotante--------


//---- mostrar pizza elegida ------

const botonElegirPizza = document.getElementById('mostrarPizzaElegida');
const divPizza = document.querySelector('.pizzaElegida');
const textoEle = document.getElementById('textoPedido');

function mostrarPizzaElegida() {

    divPizza.style.top = '-0';
    divPizza.style.transition = '.4s';
    textoEle.innerHTML = 'Tu pedido se ha realizado con exito'

};

//cerrar pizza elegida
let botonCerrarElegirPizza = document.getElementById('cerrarPizzaElegida');
botonCerrarElegirPizza.addEventListener('click', cerrarElegir);

function cerrarElegir(e) {
    e.preventDefault();

    divPizza.style.top = '-20000px';

};

//---fin cerrar pizza elegida------

//-----Mi Loader-----

window.onload =  load;

const divCarga = document.querySelector('.divCarga');

function load () {
    if(window.onload = true) {
        divCarga.style.top = '0px';
        console.log('no ha cargado')
    }
    if(window.onload = true) {
        divCarga.style.top = '-100000px';
        console.log('cargo')
    }
}