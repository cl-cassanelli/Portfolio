function controllo() {
    const bottone = document.querySelector('.invio')
    const bottone1 = document.querySelector('.dopo-invio-hidden')

    if(window.localStorage.getItem('mail-inviata') == 'successo'){
        bottone.classList.add('invio-hidden')
        bottone1.classList.add('dopo-invio-visible')
        bottone1.classList.remove('dopo-invio-hidden')
    }else{
        bottone.classList.remove('invio-hidden')
        bottone1.classList.remove('dopo-invio-visible')
        bottone1.classList.add('dopo-invio-hidden')
    }
}

controllo()