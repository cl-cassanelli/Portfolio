const nav = document.querySelector('.mobile-menu').addEventListener('click', click);
const cA = document.querySelector('#c').addEventListener('click', c);
const pA = document.querySelector('#p').addEventListener('click', p);


function click() {
    var cambio1 =  document.querySelector('.hamb span:first-of-type');
    var cambio2 =  document.querySelector('.hamb span:nth-of-type(2)');
    var cambio3 =  document.querySelector('.hamb span:last-of-type');
    if(document.querySelector('ul').style.left == "0%"){
        document.querySelector('ul').style.left = "-100%"
        cambio1.classList.remove('hamb_span1');
        cambio2.classList.remove('hamb_span2');
        cambio3.classList.remove('hamb_span3');
    }else{
        document.querySelector('ul').style.left = "0%"
        cambio1.classList.toggle('hamb_span1');
        cambio2.classList.toggle('hamb_span2');
        cambio3.classList.toggle('hamb_span3');
    }    
}
function c() {
    var cambio1 =  document.querySelector('.hamb span:first-of-type');
    var cambio2 =  document.querySelector('.hamb span:nth-of-type(2)');
    var cambio3 =  document.querySelector('.hamb span:last-of-type');
    if(document.querySelector('ul').style.left == "0%"){
        document.querySelector('ul').style.left = "-100%"
        cambio1.classList.remove('hamb_span1');
        cambio2.classList.remove('hamb_span2');
        cambio3.classList.remove('hamb_span3');
    }else{
        document.querySelector('ul').style.left = "0%"
        cambio1.classList.toggle('hamb_span1');
        cambio2.classList.toggle('hamb_span2');
        cambio3.classList.toggle('hamb_span3');
    } 
}
function p() {
    var cambio1 =  document.querySelector('.hamb span:first-of-type');
    var cambio2 =  document.querySelector('.hamb span:nth-of-type(2)');
    var cambio3 =  document.querySelector('.hamb span:last-of-type');
    if(document.querySelector('ul').style.left == "0%"){
        document.querySelector('ul').style.left = "-100%"
        cambio1.classList.remove('hamb_span1');
        cambio2.classList.remove('hamb_span2');
        cambio3.classList.remove('hamb_span3');
    }else{
        document.querySelector('ul').style.left = "0%"
        cambio1.classList.toggle('hamb_span1');
        cambio2.classList.toggle('hamb_span2');
        cambio3.classList.toggle('hamb_span3');
    } 
}