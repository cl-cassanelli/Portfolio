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


var vett = []
const istbutton = document.getElementById("ist")
istbutton.addEventListener("click", () => {
  if (istbutton.innerHTML == "Mostra Altro <i class=\"fas fa-chevron-down\" aria-hidden=\"true\"></i>") {
      document.querySelectorAll(".collapsed").forEach(res => {
          res.classList.remove("collapsed");
          vett.push(res);
      })
      istbutton.innerHTML = "Mostra Meno <i class=\"fas fa-chevron-up\"></i>"
  } else {
      vett.map(res => {
          res.classList.add("collapsed");
      })
      const offset = document.getElementById("istruzione");
      scrollTo({ top: offset.offsetTop - offset.scrollTop + offset.clientTop })
      istbutton.innerHTML = "Mostra Altro <i class=\"fas fa-chevron-down\">"
  }
})

function scroll(res) {

  let value = 0;

  value = res.children[1].children[1].children[1].innerHTML.split("%")[0];

  let progressValue = 0;
  let progressEndValue = value;

  let progress = setInterval(() => {
      progressValue++;
      res.children[1].children[1].children[1].textContent = `${progressValue}%`;
      res.children[1].children[1].children[0].children[0].style.width = `${progressValue}%`
      if (progressValue == progressEndValue) {
          clearInterval(progress);
      }
  }, 25);

}
document.addEventListener('scroll', function () {

  let skill = document.querySelectorAll(".skill-card");

  skill.forEach(res => {

      var heigth = res.offsetTop - res.scrollTop + res.clientTop

      if (window.scrollY + document.documentElement.clientHeight >= heigth) {
          if (heigth != 0) {
              if (!res.classList.contains("loaded")) {
                  res.classList.add("loaded")
                  scroll(res);
              }
          }

      }
  })

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