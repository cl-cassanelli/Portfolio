function toggleTheme() {

    const body = document.querySelector("body");
    const mode = document.querySelector(".mode");

    if (document.documentElement.getAttribute("data-theme") == "light") {
        document.documentElement.setAttribute("data-theme", "dark");

        body.classList.add("dark-mode");
        mode.classList.add("active");

        setCookie("theme", "dark", 365);

    } else {
        document.documentElement.setAttribute("data-theme", "light");

        body.classList.remove("dark-mode");
        mode.classList.remove("active");

        setCookie("theme", "", 365);
    }
}

const button = document.querySelector('.sup-container');
button.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}   

window.onscroll = () => {
    if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250) {
        button.classList.add('visible');
    } else {
        button.classList.remove('visible');
    }
}