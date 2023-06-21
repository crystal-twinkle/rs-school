import dataLevel from "./data_levels.js";

const btnLeft = document.getElementById('but-left');
const btnRight = document.getElementById('but-right');
let count = 0;

btnLeft.addEventListener('click', () => {
  if (count > 0 && count <= 10) {
    count -= 1;
  }
  generateLevel()
})

btnRight.addEventListener('click', () => {
  if (count >= 0 && count < 10) {
    count += 1;
  }
  generateLevel()
})

function generateLevel() {
  const level = document.getElementById('level-now');
  const helpTitle = document.getElementById('help-title');
  const helpSubtitle = document.getElementById('help-subtitle');
  const helpText = document.getElementById('help-text');
  const helpExamples = document.getElementById('help-examples');
  const viewerSpan = document.getElementById('viewer-span_generate');

  level.innerHTML = count + 1;
  viewerSpan.innerHTML = '';

  let arrMarkup = dataLevel[count].markup;
  for (let i = 0; i < arrMarkup.length; i++) {
    const innerP = document.createElement("span");
    innerP.append(arrMarkup[i]);
    viewerSpan.append(innerP);
  }
  helpTitle.innerHTML = dataLevel[count].helpTitle;
  helpSubtitle.innerHTML = dataLevel[count].helpSub;
  helpText.innerHTML = dataLevel[count].helpDesc;

  helpExamples.innerHTML = '';
  let arrExam = dataLevel[count].examples;
  for (let i = 0; i < arrExam.length; i++) {
    const divEl = document.createElement("div");
    divEl.append(arrExam[i]);
    helpExamples.append(divEl);
  }

}

generateLevel();


const hamburger = document.querySelector(".hamburger");
const allLevel = document.querySelector(".container__all-level");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("burger-move");
  allLevel.classList.toggle("show");
})

function generaleLevelsList() {
  for (let i = 1; i <= 11; i++) {
    const innerP = document.createElement("p");
    const innerSpan = document.createElement("span");
    innerSpan.classList.add('number-level');
    innerSpan.append(i);
    innerP.append(innerSpan);
    allLevel.append(innerP);
  }

  const allP = document.querySelectorAll(".container__all-level p");
  for (let i = 0; i < allP.length; i++) {
    allP[i].append(dataLevel[i].syntax);
  }

}

generaleLevelsList();
