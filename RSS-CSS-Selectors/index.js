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
  const levelTitle = document.getElementById('level-title');
  const levelSubtitle = document.getElementById('level-subtitle');
  const levelText = document.getElementById('level-text');
  const levelExamples = document.getElementById('level-examples');
  const viewerSpan = document.getElementById('viewer-span_generate');

  level.innerHTML = count + 1;
  viewerSpan.innerHTML = '';

  let arrMarkup = dataLevels[count].markup;
  for (let i = 0; i < arrMarkup.length; i++) {
    const innerP = document.createElement("span");
    innerP.append(arrMarkup[i]);
    viewerSpan.append(innerP);
  }
  levelTitle.innerHTML = dataLevels[count].levelTitle;
  levelSubtitle.innerHTML = dataLevels[count].levelSub;
  levelText.innerHTML = dataLevels[count].levelDesc;

  levelExamples.innerHTML = '';
  let arrExam = dataLevels[count].examples;
  for (let i = 0; i < arrExam.length; i++) {
    const divEl = document.createElement("div");
    divEl.append(arrExam[i]);
    levelExamples.append(divEl);
  }

}

generateLevel()
