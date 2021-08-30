document.querySelector('.sup-container').addEventListener('click', backUp)

function backUp(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}