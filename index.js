function menuHamburger(){
    var btnmenu = document.querySelector('.menu-hamburguer');
    if(btnmenu.classList.contains('open')){
        btnmenu.classList.remove('open');
    }else{
        btnmenu.classList.add('open')
    }
}