const button = document.querySelector('.sup-container');
button.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}   

window.onscroll = () => {
    if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250) {
        button.classList.add('visible');
    } else {
        button.classList.remove('visible');
    }
}