//----Funcones del Menu----

var divMenu = document.querySelector('.divMenu');

function botonMenu() {

    const estadoM = document.querySelector('.navs').style.right;
    let nav = document.querySelector('.navs');

    if(estadoM == "-10000px"){
        nav.style.right = '0px';
        divMenu.style.background = 'rgb(234, 32, 39)';
        divMenu.style.transition = 'all .5s';

    }else {
        nav.style.right = '-10000px';
        nav.style.transition = 'all .5s';
        divMenu.style.background = 'black';
    }

};




