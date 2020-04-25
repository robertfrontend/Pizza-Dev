// MENU

//variables
var divMenu = document.querySelector('.divMenu');
let estadoM = document.querySelector('.navs')
estadoM = false

var nav = document.querySelector('.navs');
const botonMenu = document.querySelector('#controlA')


// event listeners

botonMenu.addEventListener('click', abrirMenu )

//function

function abrirMenu() {

    switch(estadoM) {
        case false:

            nav.style.top = '70px'
            estadoM = true
            divMenu.style.borderBottom = '2px solid rgba(196, 0, 7, 0.507)';
            divMenu.style.transition = 'all .5s';

            break;

        case true:

            estadoM = false;
            nav.style.top = '-1000px'
            divMenu.style.borderBottom = 'rgba(0, 0, 0, 0.425)';


        break;
            
    }

    // if(estadoM == false){

    //     nav.style.right = '-0px'
    //     nav.style.background = 'red'

    //     divMenu.style.background = 'rgb(234, 32, 39)';
    //     divMenu.style.transition = 'all .5s';

    // }else {
    //     nav.style.right = '-1000px'
    //     nav.style.transition = 'all .5s';
    //     divMenu.style.background = 'black';
    // }

};



