// Navbar
const hamburger = document.querySelector(".hamb");
const menu = document.querySelector('ul');
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamb-active");
    if(menu.style.left == "0%") menu.style.left = "-100%"
    else menu.style.left = "0%"
});

function toggleTheme() {
    const html = document.documentElement;
    const body = document.querySelector("body");
    const mode = document.querySelector(".mode");
    const currentTheme = html.getAttribute("data-theme");

    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);

    if (newTheme === "dark") {
        body.classList.add("dark-mode");
        mode.classList.add("active");
        setCookie("theme", "dark", 365);
    } else {
        body.classList.remove("dark-mode");
        mode.classList.remove("active");
        setCookie("theme", "", 365);
    }
};

const topButton = document.querySelector('.sup-container');
topButton.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}; 
window.onscroll = () => {
    if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250) topButton.classList.add('visible');
    else topButton.classList.remove('visible');
};

function copyToClipboard() {
    navigator.clipboard.writeText("info@giuseppecassanelli.it")
    document.querySelector(".button-ctn").innerHTML = "<i class=\"fa-solid fa-check\"></i>&nbsp;Email copiata";
    setTimeout(() =>{
        document.querySelector(".button-ctn").innerHTML = "Copia la mail";
    }, 2500);
};