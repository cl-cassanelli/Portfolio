function toggleViewProj() {

    const button = document.querySelector(".proj");

    if(button.innerHTML == "Mostra Altro <i class=\"fas fa-chevron-down\" aria-hidden=\"true\"></i>"){
        button.innerHTML = "Mostra Meno <i class=\"fas fa-chevron-up\"></i>"
    }else{
        button.innerHTML = "Mostra Altro <i class=\"fas fa-chevron-down\">"
    }
    
}

var vett = []

function toggleViewIst() {

    const button = document.querySelector(".ist");

    if(button.innerHTML == "Mostra Altro <i class=\"fas fa-chevron-down\" aria-hidden=\"true\"></i>"){

        document.querySelectorAll(".hidden").forEach(res => {
            res.classList.remove("hidden");
            res.classList.add("transition");
            vett.push(res);
        })

        button.innerHTML = "Mostra Meno <i class=\"fas fa-chevron-up\"></i>"
    }else{

        vett.map(res => {
            res.classList.add("hidden");
            res.classList.remove("transition");
        })

        button.innerHTML = "Mostra Altro <i class=\"fas fa-chevron-down\">"
    }
    
}


function mobileBtn(e) {
    
    if(e == "lang-1"){

        document.querySelectorAll(".arrow-icon").forEach(res => {
            if (res.classList.contains("lang-1")) res.classList.toggle("arrow-icon-reverse")
            else res.classList.remove("arrow-icon-reverse")
        });
        document.querySelectorAll("#istruzione .container").forEach(res => {
            if (res.classList.contains("lang-1")) res.classList.toggle("cards-closed")
            else res.classList.add("cards-closed")
        });

        

    } else if (e == "front-2"){

        document.querySelectorAll(".arrow-icon").forEach(res => {
            if (res.classList.contains("front-2")) res.classList.toggle("arrow-icon-reverse")
            else res.classList.remove("arrow-icon-reverse")
        });
        document.querySelectorAll("#istruzione .container").forEach(res => {
            if (res.classList.contains("front-2")) res.classList.toggle("cards-closed")
            else res.classList.add("cards-closed")
        });

    } else if (e == "back-3"){

        document.querySelectorAll(".arrow-icon").forEach(res => {
            if (res.classList.contains("back-3")) res.classList.toggle("arrow-icon-reverse")
            else res.classList.remove("arrow-icon-reverse")
        });
        document.querySelectorAll("#istruzione .container").forEach(res => {
            if (res.classList.contains("back-3")) res.classList.toggle("cards-closed")
            else res.classList.add("cards-closed")
        });

    } else if (e == "soft-4"){

        document.querySelectorAll(".arrow-icon").forEach(res => {
            if (res.classList.contains("soft-4")) res.classList.toggle("arrow-icon-reverse")
            else res.classList.remove("arrow-icon-reverse")
        });
        document.querySelectorAll("#istruzione .container").forEach(res => {
            if (res.classList.contains("soft-4")) res.classList.toggle("cards-closed")
            else res.classList.add("cards-closed")
        });

    } else if (e == "dev-5"){

        document.querySelectorAll(".arrow-icon").forEach(res => {
            if (res.classList.contains("dev-5")) res.classList.toggle("arrow-icon-reverse")
            else res.classList.remove("arrow-icon-reverse")
        });
        document.querySelectorAll("#istruzione .container").forEach(res => {
            if (res.classList.contains("dev-5")) res.classList.toggle("cards-closed")
            else res.classList.add("cards-closed")
        });

    } else if (e == "soft-6"){

        document.querySelectorAll(".arrow-icon").forEach(res => {
            if (res.classList.contains("soft-6")) res.classList.toggle("arrow-icon-reverse")
            else res.classList.remove("arrow-icon-reverse")
        });
        document.querySelectorAll("#istruzione .container").forEach(res => {
            if (res.classList.contains("soft-6")) res.classList.toggle("cards-closed")
            else res.classList.add("cards-closed")
        });

    } else if (e == "os-7"){

        document.querySelectorAll(".arrow-icon").forEach(res => {
            if (res.classList.contains("os-7")) res.classList.toggle("arrow-icon-reverse")
            else res.classList.remove("arrow-icon-reverse")
        });
        document.querySelectorAll("#istruzione .container").forEach(res => {
            if (res.classList.contains("os-7")) res.classList.toggle("cards-closed")
            else res.classList.add("cards-closed")
        });

    }
    
}

function copyToClipboard() {
    navigator.clipboard.writeText("info@giuseppecassanelli.it")
    document.querySelector(".button-ctn").innerHTML = "<i class=\"fa-solid fa-check\"></i>&nbsp;Email copiata";
    setTimeout(() =>{
        document.querySelector(".button-ctn").innerHTML = "Copia la mail";
    }, 2500)
}