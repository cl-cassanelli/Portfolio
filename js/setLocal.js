function setItem() {

    window.localStorage.setItem('mail-inviata', 'successo')
    
    setTimeout(clear, 86400000)

}

function clear() {
    window.localStorage.clear()
}

setItem()