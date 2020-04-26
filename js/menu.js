// MENU

//variables
var divMenu = document.querySelector('.divMenu');
let estadoM = document.querySelector('.navs')
estadoM = false

var padreNav = document.querySelector('.padreNav');
const botonMenu = document.querySelector('#controlA')


// event listeners

botonMenu.addEventListener('click', abrirMenu )

//function

const templateMenu = `
    <div class="menu">
    <div>
    
      <a href="#"><ion-icon name="home-outline"></ion-icon>Inicio</a>
    </div>
    <div>
      <a href="#"><ion-icon name="grid-outline"></ion-icon>Menu</a>
    </div>
    <div>
      <a href="#"><ion-icon name="pizza-outline"></ion-icon>Ofertas</a>
    </div>
    <div>
      <a href="#"><ion-icon name="call-outline"></ion-icon>Contactos</a>
    </div>
    </div>
`


function abrirMenu() {

    switch(estadoM) {
        case false:

            padreNav.innerHTML = templateMenu;
            estadoM = true
            
            break;

        case true:
            estadoM = false
            padreNav.innerHTML = ""

        break;
            
    }


};



