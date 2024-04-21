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
      const container = document.getElementById(isTypeContainer);

      if (isTypeContainer === "languages" || isTypeContainer === "certifications") {
          element.entries.forEach(entry => {
              addCertifications(
                  container,
                  document.getElementById("language-card-template"),
                  entry.name,
                  entry.level,
                  entry.img,
              );
          });
      } else {
          element.entries.forEach(entry => {
              addSkillCard(
                  container,
                  document.getElementById("skill-card-template"),
                  entry.name,
                  entry.value.toString() + "%",
                  entry.img,
                  entry.color
              );
          });
      }
  });
}
function addCertifications(container, template, name, level, image) {
  const cardEl = document.importNode(template.content, true);
  cardEl.getElementById("language-image").src = image;
  cardEl.getElementById("language-image").alt = name;
  cardEl.getElementById("language-name").textContent = name;
  cardEl.getElementById("language-level").textContent = level;
  container.appendChild(cardEl);
}
function addSkillCard(container, template, name, value, image, color) {
  const cardEl = document.importNode(template.content, true);
  cardEl.getElementById("skill-image").src = image;
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
        if(progressValue >= value) clearInterval(progress);
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

// Card Mobile
function cardMobile(e) {
  const classList = [
      "lang-1",
      "front-2",
      "back-3",
      "soft-4",
      "dev-5",
      "soft-6",
      "os-7",
      "other-8",
      "cert-9"
  ];
  if (classList.includes(e)) cardBrain(e); 
}

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