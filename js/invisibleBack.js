const bottone = document.getElementById('sup-container-visible-id');
const navbar = document.querySelector('nav');

window.onscroll = function () {
    if(document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250){
        bottone.classList.add('sup-container-visible');
        navbar.classList.add('nav-modificata');
    }
    else{
        bottone.classList.remove('sup-container-visible');
        navbar.classList.remove('nav-modificata');

    }
}