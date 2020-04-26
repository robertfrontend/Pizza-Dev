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
`

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

//validar formulario
function validarForm() {

    let inputName = document.querySelector('#name').value;
    let inputEmail = document.querySelector('#email').value;

    let vacio = "";
    let errorName = document.querySelector('#errorName');
    let errorEmail = document.querySelector('#errorEmail');

    switch(vacio){

        case inputName:

            console.log('Completa el nombre')
            errorName.innerHTML = 'Completa el nombre'
            errorName.style.color = 'red';

            break;

        case inputEmail:

            console.log('Completa el email')
            errorEmail.innerHTML = 'Completa el email'
            errorEmail.style.color = 'red';

            break;

        default:
            console.log('completado')
            errorName.innerHTML = 'Completado'
            errorName.style.color = 'green';

            errorEmail.innerHTML = 'Completado'
            errorEmail.style.color = 'green';

        };
};

function quitarOrdenar() {
    seccionOrdenar.innerHTML = '';
    seccionOrdenar.style.transition = '.4s'
    
    seccionOrdenar.style.height = 'auto';
    seccionOrdenar.style.transition = '.4s'
};

setTimeout(function(){
    seccionOrdenar.innerHTML = '';
    seccionOrdenar.style.transition = '.4s'
    
    seccionOrdenar.style.height = 'auto';
    seccionOrdenar.style.transition = '.4s'
},10000)


