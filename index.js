// uniendo js
document.write('<script src="./js/menu.js"></script>');
document.write('<script src="./js/loader.js"></script>');

// ---Variables----
let btnOrdenar = document.querySelector('#ordernar');
let seccionOrdenar = document.querySelector('.seccionOrdenar');


// ----Estilos----
var estilosOrdenar = {
    hei: '100vh'
}

var estilos = {
    error: 'red',
    correcto: 'green',
    botonQuitar: `<p id="quitar">X</p>`
};
const templateOrdenar = `
<div class="padreQui" id="ordenar" >
    <div class="divQuitar">
        ${estilos.botonQuitar}
    </div>
    <div class="divOrdenar" >
        <h1>
            Oferton!
        </h1>
        <div>
            <label for="exampleInputEmail1">Nombre</label>
            <input type="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Tu nombre" >
            <small id="errorName" class="form-text">
            </small>

            <label for="">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Tu email" >
            <small id="errorEmail" class="form-text ">
            </small>
        </div>
        <div>
            <a class="boton1" id="validForm" href="#ss">
                Enviar
            </a>
        </div>
    </div>
</div>
`;

// ----Clases----

class Interfaz {
    imprimirMensaje(mensaje, tipo){
        let errorEmail = document.querySelector('#errorEmail');
        if(tipo === 'error'){
            errorEmail.innerHTML = `${mensaje}`;
            errorEmail.style.color = estilos.error;

        }else {
            errorEmail.innerHTML = `${mensaje}`
            errorEmail.style.color = estilos.correcto;
        };
    };
};

// ----Event Listener----

eventListeners();

function eventListeners(){
    btnOrdenar.addEventListener('click', mostrarOrdenar);
};

// ----Funciones----

//mostrar ordenar
function mostrarOrdenar() {
    seccionOrdenar.innerHTML = templateOrdenar;
    seccionOrdenar.style.height = estilosOrdenar.hei;

    let btnValidar = document.querySelector('#validForm');

    //event validar form
    btnValidar.addEventListener('click', validarForm);

    let btnQuitar = document.querySelector('#quitar');
    btnQuitar.addEventListener('click', quitarOrdenar);

};
//validar formulario
function validarForm() {

    let inputName = document.querySelector('#name').value;
    let inputEmail = document.querySelector('#email').value;

    const ui = new Interfaz();

    if(inputName == '' || inputEmail == ''){
        ui.imprimirMensaje('Completa los campos correctamente', 'error');   
    }else {
        ui.imprimirMensaje('Completado', 'correcto');
        setTimeout(function(){
            quitarOrdenar();
        },3000);

    }
};

function quitarOrdenar() {
    seccionOrdenar.innerHTML = '';
};

