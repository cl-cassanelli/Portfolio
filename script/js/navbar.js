const hamburger = document.querySelector(".hamb")

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamb-active");

    if(document.querySelector('ul').style.left == "0%"){
        document.querySelector('ul').style.left = "-100%"
    }else{
        document.querySelector('ul').style.left = "0%"
    }

})