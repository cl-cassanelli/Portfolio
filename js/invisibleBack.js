const bottone = document.getElementById('sup-container-visible-id');

window.onscroll = function () {
    if(document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250){
        bottone.classList.add('sup-container-visible');
    }
    else{
        bottone.classList.remove('sup-container-visible');
    }
}