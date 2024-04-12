const inpName = document.getElementById("name");
const inpEmail = document.getElementById("email");
const inpObject = document.getElementById("object");

//Input check
function buttonClick() {

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inpName.value == "") removeHidden("name", 0);
    else addHidden(".namejs");

    if(inpEmail.value == "") removeHidden("email", 0);
    else if(!inpEmail.value.match(mailformat)) removeHidden("email", 1);
    else addHidden(".emailjs");
    
    if(inpObject.value == "") removeHidden("object", 0);
    else if(inpObject.value.length < 15) removeHidden("object", 1);
    else addHidden(".objectjs");
    
    if(inpName.value != "" && inpEmail.value != "" && email.value.match(mailformat) && inpObject.value != ""){
        setCookie("mail-send", true, 0.083);
        showHint(inpName.value, inpEmail.value, inpObject.value);
        // window.location.reload();
    }
}

//Add-Remove hidden class
function addHidden(addClass) {
    document.querySelectorAll(addClass).forEach(res => res.classList.add("mail-hidden"));
}
function removeHidden(remClass, data) {
    if(remClass == "name"){
        document.querySelectorAll(".validate-input-text")[0].textContent = "Il nome è richesto!";
        document.querySelectorAll(".namejs").forEach(res => res.classList.remove("mail-hidden"));
    }
    if(remClass == "email"){
        if(data == 0) document.querySelectorAll(".validate-input-text")[1].textContent = "La mail è richiesta!";
        else document.querySelectorAll(".validate-input-text")[1].textContent = "Indirizzo email invalido!";
        document.querySelectorAll(".emailjs").forEach(res => res.classList.remove("mail-hidden"));
    }
    if(remClass == "object"){
        if(data == 0) document.querySelectorAll(".validate-input-text")[2].textContent = "L'oggetto è richiesto!";
        else document.querySelectorAll(".validate-input-text")[2].textContent = "Testo troppo breve!";
        document.querySelectorAll(".objectjs").forEach(res => res.classList.remove("mail-hidden"));
    }
}

//Object lenght 
var result = document.querySelector(".dataValue");
var limit = 200;
result.innerHTML = 0 + "/" + limit;
inpObject.addEventListener("input", function(){
    var textLength = inpObject.value.length;
    result.textContent = textLength + "/" + limit;
});

//Label animation
document.querySelectorAll(".input-use").forEach(res =>{
    res.addEventListener("focusin", (event) => {
        const label = event.target.parentElement.children[1];
        label.classList.add("active")
    })
})
document.querySelectorAll(".input-use").forEach(res =>{
    res.addEventListener("focusout", (event) => {
        const label = event.target.parentElement.children[1];
        if(event.target.value.length == 0) label.classList.remove("active");
    })
})

//Error hover
document.querySelectorAll(".fa-solid").forEach(res => {
    res.addEventListener("mouseover", (event) => {
        var hov = event.target.parentElement.parentElement.children[0]
        hov.classList.remove("hover-hidden")
    })
})
document.querySelectorAll(".fa-solid").forEach(res => {
    res.addEventListener("mouseout", (event) => {
        var hov = event.target.parentElement.parentElement.children[0]
        hov.classList.add("hover-hidden")
    })
})

//Send data to php
function showHint(name, email, object) {
    const xhttp = new XMLHttpRequest();
    // console.log("./")
    xhttp.open("GET", "https://cl-cassanelli.github.io/Portfolio/script/php/mail.php?name=" + name + "&email=" + email + "&object=" + object);
    xhttp.send();
}