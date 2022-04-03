document.querySelector(".mobile-menu").addEventListener("click", navClick)

function navClick() {
    
    const hamb1 = document.querySelector(".mobile-menu span:first-of-type")
    const hamb2 = document.querySelector(".mobile-menu span:nth-of-type(2)")
    const hamb3 = document.querySelector(".mobile-menu span:last-of-type")

    if(document.querySelector('ul').style.left == "0%"){
        document.querySelector('ul').style.left = "-100%"
    }else{
        document.querySelector('ul').style.left = "0%"
    }

    hamb1.classList.toggle("hamb_span1")
    hamb2.classList.toggle("hamb_span2")
    hamb3.classList.toggle("hamb_span3")

}