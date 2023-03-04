function toggleViewProj() {

    const button = document.querySelector(".proj");

    if(button.innerHTML == "Mostra Altro <i class=\"fas fa-chevron-down\" aria-hidden=\"true\"></i>"){
        button.innerHTML = "Mostra Meno <i class=\"fas fa-chevron-up\"></i>"
    }else{
        button.innerHTML = "Mostra Altro <i class=\"fas fa-chevron-down\">"
    }
    
}

function copyToClipboard() {
    navigator.clipboard.writeText("info@giuseppecassanelli.it")
    document.querySelector(".button-ctn").innerHTML = "<i class=\"fa-solid fa-check\"></i>&nbsp;Email copiata";
    setTimeout(() =>{
        document.querySelector(".button-ctn").innerHTML = "Copia la mail";
    }, 2500)
}