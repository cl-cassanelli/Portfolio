document.querySelector('.hamb').addEventListener("click", nav);

function nav(){

    const cambio1 =  document.querySelector('.hamb span:first-of-type');
    const cambio2 =  document.querySelector('.hamb span:nth-of-type(2)');
    const cambio3 =  document.querySelector('.hamb span:last-of-type');

    cambio1.classList.toggle('hamb_span1');
    cambio2.classList.toggle('hamb_span2');
    cambio3.classList.toggle('hamb_span3');

    const cambio4 = document.querySelector('nav')
    cambio4.classList.toggle('navmod')
}