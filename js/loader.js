//-----Mi Loader-----

window.onload =  load;
const divCarga = document.querySelector('.divCarga');

var divPizzas = document.querySelector('.divPizzas');

function load () {

    if(window.onload = true) {
        divCarga.style.top = '0px';

    }if(window.onload = true) {
        divCarga.style.top = '-100000px';
        
    };
};

setTimeout(function() {
    divCarga.style.top = '-100000px';
},3000)




