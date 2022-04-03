function buttonClick() {

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const object = document.querySelector("#object").value;


    if(name == ""){
        document.querySelectorAll(".namejs").forEach(res => res.classList.remove("hidden"))
    } else {
        document.querySelectorAll(".namejs").forEach(res => res.classList.add("hidden"))
    }

    if(email == ""){
        document.querySelectorAll(".emailjs").forEach(res => res.classList.remove("hidden"))
    } else {
        document.querySelectorAll(".emailjs").forEach(res => res.classList.add("hidden"))
    }

    if(object == ""){
        document.querySelectorAll(".objectjs").forEach(res => res.classList.remove("hidden"))
    } else {
        document.querySelectorAll(".objectjs").forEach(res => res.classList.add("hidden"))
    }

    


    // window.location.href = "./script/mail.php";
}