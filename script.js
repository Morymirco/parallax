const color = ["#b0adc2", "#5db9c8", "#e2b7b6", "#1da2d0"];
const btns = [...document.querySelectorAll("button")];
const link = [...document.querySelectorAll("li")];
const section2 = document.querySelectorAll(".section");
document.addEventListener("contextmenu", affiche);
document.addEventListener("click", affiche);
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
function affiche(e) {
  if (e.type == "contextmenu") {
    e.preventDefault();
    menu.style.display = "block";
    menu.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
  } else if (e.type == "click") {
    menu.style.display = "none";
  }
}
btns.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    console.log(btns.indexOf(e.target));
    document.body.style.backgroundColor = color[btns.indexOf(e.target)];
    nav.style.backgroundColor = color[btns.indexOf(e.target)];
    section2.forEach((elem) => {
      elem.style.color = color[btns.indexOf(e.target)];
    });
  });
});

// const link = [...document.querySelectorAll("li")];
const section = [...document.querySelectorAll("section")];
let posisection = section.map((sect) => sect.offsetTop);
console.log(posisection);

link.forEach((elem) => {
  elem.addEventListener("click", hundle);
});
function hundle(e) {
  let posilink = link.indexOf(e.target);
  window.scrollTo({
    top: posisection[posilink],
    behavior: "smooth",
  });
}
