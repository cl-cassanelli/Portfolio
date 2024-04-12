//Card content
fetch("data.json").then(async res => {

  let response = await res.json()

  response.forEach(element => {

    let istType = element.section;

    const certificationSkill = document.getElementById("certifications");
    const languages = document.getElementById("languages");
    const frontend = document.getElementById("frontend");
    const backend = document.getElementById("backend");
    const softwaredev = document.getElementById("softwaredev");
    const dev = document.getElementById("dev");
    const software = document.getElementById("software");
    const operating = document.getElementById("operating");
    const other = document.getElementById("other");
    
    const templateLang = document.getElementById("language-card-template");
    const templateSkill = document.getElementById("skill-card-template");

    element.entries.forEach(res => {

      let name = res.name;
      let percentage, level;
      if(res.value) percentage = res.value.toString() + "%";
      if(res.level) level = res.level;
      let image = res.img;
      let color = res.color;

      const langEl = document.importNode(templateLang.content, true);
      const skillEl = document.importNode(templateSkill.content, true);

      //Language/Certifications Data
      let langName = langEl.getElementById("language-name");
      let langLevel = langEl.getElementById("language-level");
      let langImg = langEl.getElementById("language-image");

      //Skill Data
      let skillName = skillEl.getElementById("skill-name");
      let skillImg = skillEl.getElementById("skill-image");
      let skillValue = skillEl.getElementById("skill-value");
      let skillProgress = skillEl.getElementById("skill-progress");

      //Nome
      langName.textContent = name;
      skillName.textContent = name;

      //Level
      langLevel.textContent = level;

      //Valore
      skillValue.textContent = percentage;

      //Img
      skillImg.src = image;
      skillImg.alt = name;
      langImg.src = image;
      langImg.alt = name;

      //Color
      skillProgress.style.background = color;
      
      //Remove Attribute
      skillImg.removeAttribute("id");
      langImg.removeAttribute("id");

      if(istType == languages.parentElement.children[0].children[0].textContent){
        languages.appendChild(langEl.firstElementChild);
      } else if(istType == frontend.parentElement.children[0].children[0].textContent){
        frontend.appendChild(skillEl.firstElementChild);
      } else if (istType == backend.parentElement.children[0].children[0].textContent){
        backend.appendChild(skillEl.firstElementChild);
      } else if (istType == softwaredev.parentElement.children[0].children[0].textContent){
        softwaredev.appendChild(skillEl.firstElementChild);
      } else if (istType == dev.parentElement.children[0].children[0].textContent){
        dev.appendChild(skillEl.firstElementChild);
      } else if (istType == software.parentElement.children[0].children[0].textContent){
        software.appendChild(skillEl.firstElementChild);
      } else if (istType == operating.parentElement.children[0].children[0].textContent){
        operating.appendChild(skillEl.firstElementChild);
      } else if (istType == other.parentElement.children[0].children[0].textContent){
        other.appendChild(skillEl.firstElementChild);
      }else if (istType == certificationSkill.parentElement.children[0].children[0].textContent){
        certificationSkill.appendChild(langEl.firstElementChild);
      }
    })
  });
})

//Animation
// window.matchMedia("(max-width: 889px)").addEventListener("change", function () {
//   console.log('minore di 700px')
// })
// if (window.matchMedia("(max-width: 700px)").matches) {
//   console.log('minore di 700px')
// } else {
//   console.log('maggiore di 700px')

// }
// window.matchMedia("(min-width: 890px)").addEventListener("change", function () {
//   console.log('minore di 700px')
// })
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
document.addEventListener('scroll', function() {

  let skill = document.querySelectorAll(".skill-card");

  skill.forEach(res => {
  
    var heigth = res.offsetTop - res.scrollTop + res.clientTop

    if(window.scrollY + document.documentElement.clientHeight >= heigth){
      if(heigth != 0){
        if(!res.classList.contains("loaded")){
          res.classList.add("loaded")
          scroll(res);
        }
      }
      
    }
  })

});

//Button function
var vett = []

const istbutton = document.getElementById("ist")
istbutton.addEventListener("click", ()=>{
  if(istbutton.innerHTML == "Mostra Altro <i class=\"fas fa-chevron-down\" aria-hidden=\"true\"></i>"){
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
      scrollTo({top: offset.offsetTop - offset.scrollTop + offset.clientTop})
      istbutton.innerHTML = "Mostra Altro <i class=\"fas fa-chevron-down\">"
  }
})

// Card Mobile
function cardMobile(e) {
  if(e == "lang-1") cardBrain(e);
  else if (e == "front-2") cardBrain(e);
  else if (e == "back-3") cardBrain(e);
  else if (e == "soft-4") cardBrain(e);
  else if (e == "dev-5") cardBrain(e);
  else if (e == "soft-6") cardBrain(e);
  else if (e == "os-7") cardBrain(e);
  else if (e == "other-8") cardBrain(e);
  else if (e == "cert-9") cardBrain(e);
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