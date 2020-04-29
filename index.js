// uniendo js
document.write('<script src="./js/menu.js"></script>');
document.write('<script src="./js/loader.js"></script>');

//boton ordenear
let btnOrdenar = document.querySelector('#ordernar');
let seccionOrdenar = document.querySelector('.seccionOrdenar');

//event boton ordenar
btnOrdenar.addEventListener('click', mostrarOrdenar);

let botonX = `
    <a id="quitar" href="#seccionBienvenida">X</a>
`;

// funcion mostrar ordenar
function mostrarOrdenar() {
    const template = `
        <div class="padreQui" id="ordenar" >
            <div class="divQuitar">
                ${botonX}
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

    seccionOrdenar.innerHTML = template;
    seccionOrdenar.style.height = '100vh';

    let btnValidar = document.querySelector('#validForm');

    //event validar form
    btnValidar.addEventListener('click', validarForm);


    let btnQuitar = document.querySelector('#quitar');
    btnQuitar.addEventListener('click', quitarOrdenar);

};

class Interfaz {
    imprimirMensaje(mensaje, tipo){
        let errorEmail = document.querySelector('#errorEmail');
        
        if(tipo === 'error'){
            errorEmail.innerHTML = `${mensaje}`;
            errorEmail.style.color = 'red';

        }else {
            errorEmail.innerHTML = `${mensaje}`
            errorEmail.style.color = 'green';
        };

    };
};

//validar formulario
function validarForm() {

    let inputName = document.querySelector('#name').value;
    let inputEmail = document.querySelector('#email').value;
    let vacio = "";

    const ui = new Interfaz();
    
    switch(vacio){

        case inputName:
            ui.imprimirMensaje('Completa el Nombre', 'error');
            break;

        case inputEmail:
            ui.imprimirMensaje('Completa el email', 'error');
            break;

        default:
            ui.imprimirMensaje('Bien completado', 'correcto');
            

    };
};

function quitarOrdenar() {
    seccionOrdenar.innerHTML = '';
    seccionOrdenar.style.transition = '.4s';
    seccionOrdenar.style.height = 'auto';
    seccionOrdenar.style.transition = '.4s';
};

let iconoLike = document.querySelector('#iconoLike');

function like() {
    iconoLike.name = 'heart'
}

//ecmascript 6

// const verOfertas = document.querySelector('#verOfertas')

// verOfertas.addEventListener('click', funcionVerOfertas)
