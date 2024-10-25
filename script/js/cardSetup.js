async function fetchData() {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
        return [];
    }
}

async function loadCards() {
    const data = await fetchData();
    data.forEach(element => {
        const isType = element.section;
        var isTypeContainer = isType.toLowerCase().replace(/\s+/g, "-");

        var container = document.getElementById(isTypeContainer);
        if (!container) {
            createCardContainer(isType, element.class);
            container = document.getElementById(isTypeContainer);
        }

        const addCard = isTypeContainer === "languages" || isTypeContainer === "certifications" ? addCertifications : addSkillCard;
        element.entries.forEach(entry => addCard(container, entry));
  });
}

function createCardContainer(isType, elementClass) {
    const projSetup = document.querySelector(".proj-setup");
    const cardSetup = document.createElement("div");
    cardSetup.classList.add("card-setup");

    // Mobile
    const mobileHeader = document.createElement("header");
    mobileHeader.classList.add("mobile-header");

    const subtitle = document.createElement("p");
    subtitle.classList.add("subtitle");
    subtitle.innerHTML = isType;

    const openButton = document.createElement("button");
    openButton.onclick = () => cardBrain(elementClass);
    openButton.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-icon ${elementClass}">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
    </svg>`;

    mobileHeader.appendChild(subtitle);
    mobileHeader.appendChild(openButton);

    // Desktop
    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("container", "cards-closed", elementClass);
    cardsContainer.id = isType.toLowerCase().replace(/\s+/g, "-");

    // Aggiungo i blocchi Mobile e Desktop
    cardSetup.append(mobileHeader, cardsContainer);

    // Aggiungo la card al container
    projSetup.appendChild(cardSetup);
}


function addCertifications(container, { name, level, img }) {
    const template = document.getElementById("language-card-template").content;
    const cardEl = document.importNode(template, true);
    cardEl.getElementById("language-image").src = img;
    cardEl.getElementById("language-image").alt = name;
    cardEl.getElementById("language-name").textContent = name;
    cardEl.getElementById("language-level").textContent = level;
    container.appendChild(cardEl);
}
function addSkillCard(container, { name, value, img, color }) {
    const template = document.getElementById("skill-card-template").content;
    const cardEl = document.importNode(template, true);
    cardEl.getElementById("skill-image").src = img;
    cardEl.getElementById("skill-image").alt = name;
    cardEl.getElementById("skill-name").textContent = name;
    cardEl.getElementById("skill-value").textContent = value;
    cardEl.getElementById("skill-progress").style.backgroundColor = color;
    container.appendChild(cardEl);
}
window.addEventListener("load", loadCards);

let isContentExpanded = false;
const istButton = document.getElementById("ist");
const contentToToggle = document.querySelectorAll(".collapsed");
istButton.addEventListener("click", () => {
    if (!isContentExpanded) {
        contentToToggle.forEach(element => element.classList.remove("collapsed"));
        istButton.innerHTML = "Mostra Meno <i class=\"fas fa-chevron-up\"></i>";
    } else {
        contentToToggle.forEach(element => element.classList.add("collapsed"));
        window.scrollTo({ top: document.getElementById("istruzione").offsetTop });
        istButton.innerHTML = "Mostra Altro <i class=\"fas fa-chevron-down\"></i>";
    }
    isContentExpanded = !isContentExpanded;
});

function animateProgressBar(element) {
    let progressValue = 0;
    let value = parseInt(element.querySelector("#skill-value").textContent);
    let progressBar = element.querySelector("#skill-progress");

    let progress = setInterval(() => {
        progressValue++;
        element.querySelector("#skill-value").innerHTML = `${progressValue}%`;
        progressBar.style.width = `${progressValue}%`;
        if (progressValue >= value) clearInterval(progress);
    }, 25);
}

document.addEventListener('scroll', function () {
    let skills = document.querySelectorAll(".skill-card");
    skills.forEach(skill => {
        if (skill.getBoundingClientRect().top <= window.innerHeight && !skill.classList.contains("loaded")) {
            skill.classList.add("loaded");
            animateProgressBar(skill);
        }
    });
});


function cardBrain(className) {
    document.querySelectorAll(".arrow-icon").forEach(res => {
        if (res.classList.contains(className)) res.classList.toggle("arrow-icon-reverse")
        else res.classList.remove("arrow-icon-reverse")
    });
    document.querySelectorAll("#istruzione .container").forEach(res => {
        if (res.classList.contains(className)) res.classList.toggle("cards-closed")
        else res.classList.add("cards-closed")
    });
}
