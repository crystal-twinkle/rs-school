import dataLevel from "./data_levels.js";

const btnLeft = document.getElementById('but-left');
const btnRight = document.getElementById('but-right');
const numberlevel = document.getElementById('level-now');
let count = 0;

btnLeft.addEventListener('click', () => {
  if (count > 0 && count <= 10) {
    count -= 1;
  }
  numberlevel.innerHTML = count + 1;
  generateLevel(count)
})

btnRight.addEventListener('click', () => {
  if (count >= 0 && count < 10) {
    count += 1;
  }
  numberlevel.innerHTML = count + 1;
  generateLevel(count)
})

function generateLevel(num=1) {
  const helpTitle = document.getElementById('help-title');
  const helpSubtitle = document.getElementById('help-subtitle');
  const helpText = document.getElementById('help-text');
  const helpExamples = document.getElementById('help-examples');
  const viewerSpan = document.getElementById('viewer-span_generate');

  viewerSpan.innerHTML = '';

  let arrMarkup = dataLevel[num].markup;
  for (let i = 0; i < arrMarkup.length; i++) {
    const innerP = document.createElement("span");
    innerP.append(arrMarkup[i]);
    viewerSpan.append(innerP);
  }
  helpTitle.innerHTML = dataLevel[num].helpTitle;
  helpSubtitle.innerHTML = dataLevel[num].helpSub;
  helpText.innerHTML = dataLevel[num].helpDesc;

  helpExamples.innerHTML = '';
  let arrExam = dataLevel[num].examples;
  for (let i = 0; i < arrExam.length; i++) {
    const divEl = document.createElement("div");
    divEl.append(arrExam[i]);
    helpExamples.append(divEl);
  }

}

generateLevel();


const hamburger = document.querySelector(".hamburger");
const allLevels = document.querySelector(".container__all-levels")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("burger-move");
  allLevels.classList.toggle("show");
})

function generaleLevelsList() {
  for (let i = 1; i <= 11; i++) {
    const innerP = document.createElement("p");
    innerP.append(`${i} `);
    allLevels.append(innerP);
  }

  const allP = document.querySelectorAll(".container__all-levels p");
  for (let i = 0; i < allP.length; i++) {
    allP[i].append(dataLevel[i].syntax);
  }

}

generaleLevelsList();


document.addEventListener('DOMContentLoaded', function () {
  chooseLevel();
});

function chooseLevel() {
  allLevels.addEventListener('click', (event) => {
    let number = Number(event.target.innerHTML.charAt(0));
    numberlevel.innerHTML = number;
    generateLevel(number-1);
    allLevels.classList.remove('show')
  })

}

