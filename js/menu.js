// MENU

// Variables
var divMenu = document.querySelector('.divMenu');
let estadoM = document.querySelector('.navs')
estadoM = false

var padreNav = document.querySelector('.padreNav');
const botonMenu = document.querySelector('#controlA')

//template menu
const templateMenu = `
<div class="menu">
  <div>
    <a href="#"><ion-icon name="home-outline"></ion-icon>Inicio</a>
  </div>
  <div>
    <a href="#menu"><ion-icon name="grid-outline"></ion-icon>Menu</a>
  </div>
  <div>
    <a href="#menu"><ion-icon name="pizza-outline"></ion-icon>Ofertas</a>
  </div>
  <div>
    <a href="#contactos"><ion-icon name="call-outline"></ion-icon>Contactos</a>
  </div>
  <div>
    <a href="#pedis" id="pedidos" ><ion-icon name="cart-outline"></ion-icon>Pedidos</a>
  </div>
</div>
`;

// Event listeners
botonMenu.addEventListener('click', abrirMenu )

// Clases
class TemplateM {
  mostrarMenu(tipo){
    if(tipo === 'abrirMenu'){
      padreNav.innerHTML = templateMenu;
    }
    if(tipo === 'cerrarMenu'){
      padreNav.innerHTML = '';
    }
  }
}
// Function

//abrir menu
function abrirMenu() {
  const mosMe = new TemplateM();
    switch(estadoM) {
        case false:
            mosMe.mostrarMenu('abrirMenu')
            estadoM = true
            break;
        case true:
            estadoM = false
            mosMe.mostrarMenu('cerrarMenu')
        break;
    }
};
