import dataLevels from "./data_levels.js";

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

  let arrMarkup = dataLevels[count].markup;
  for (let i = 0; i < arrMarkup.length; i++) {
    const innerP = document.createElement("span");
    innerP.append(arrMarkup[i]);
    viewerSpan.append(innerP);
  }
  helpTitle.innerHTML = dataLevels[count].levelTitle;
  helpSubtitle.innerHTML = dataLevels[count].levelSub;
  helpText.innerHTML = dataLevels[count].levelDesc;

  helpExamples.innerHTML = '';
  let arrExam = dataLevels[count].examples;
  for (let i = 0; i < arrExam.length; i++) {
    const divEl = document.createElement("div");
    divEl.append(arrExam[i]);
    helpExamples.append(divEl);
  }

}

generateLevel()


const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("burger-move");
})



