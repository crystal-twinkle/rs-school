import dataLevel from "./data_levels.js";

const btnLeft = document.getElementById('but-left');
const btnRight = document.getElementById('but-right');
const numberLevel = document.getElementById('level-now');
const inputText = document.getElementById('cssEditor');
const inputButton = document.getElementById('input-button');
const table = document.getElementById('table');

inputButton.addEventListener('click', () => {
  effects();
  setTimeout(inputAnswer, 1000);
})

inputText.addEventListener("keypress", function (e) {
  if (e.code === 'Enter') {
    setTimeout(inputAnswer, 2000);
  }
})

function inputAnswer() {
  let numIn = Number(numberLevel.innerHTML) - 1;
  for (let e of dataLevel[numIn].answers) {
    if (inputText.value === e) {
      generateLevel(numIn + 1);
    }
  }
}

function effects() {
  let num = numberLevel.innerHTML;
  if (num === '2') {
    const square = document.querySelector('.square');
    const inputValue = inputText.value;
    const colonIndex = inputValue.indexOf(':');
    const ISBackground = inputValue.indexOf('background');
    const ISSemicolon = inputValue.indexOf(';');
    if (ISBackground !== -1 && ISSemicolon !== 1) {
      console.log('1')
      if (colonIndex !== -1) {
        let trimmedValue = inputValue.slice(colonIndex + 1, -1);
        console.log(trimmedValue)
        square.style.background = trimmedValue;
      }
    }
  }
}

btnLeft.addEventListener('click', () => {
  let count = Number(numberLevel.innerHTML) - 1;
  if (count > 0 && count <= 10) {
    count -= 1;
  }
  generateLevel(count);
})

btnRight.addEventListener('click', () => {
  let count = Number(numberLevel.innerHTML) - 1;
  if (count >= 0 && count < 10) {
    count += 1;
  }
  generateLevel(count);
})

function generateLevel(num) {
  const helpTitle = document.getElementById('help-title');
  const helpText = document.getElementById('help-text');
  const helpExamples = document.getElementById('help-examples');
  const viewerSpan = document.getElementById('viewer-span_generate');
  const taskDesc = document.getElementById('task-desc');


  inputText.value = ''

  taskDesc.innerHTML = dataLevel[num].taskDesc;
  numberLevel.innerHTML = num + 1;
  viewerSpan.innerHTML = '';
  table.innerHTML = dataLevel[num].tableFill;

  let arrMarkup = dataLevel[num].markup;
  for (let i = 0; i < arrMarkup.length; i++) {
    const innerP = document.createElement("span");
    innerP.append(arrMarkup[i]);
    viewerSpan.append(innerP);
  }
  helpTitle.innerHTML = dataLevel[num].helpTitle;
  helpText.innerHTML = dataLevel[num].helpDesc;

  helpExamples.innerHTML = '';
  let arrExam = dataLevel[num].examples;
  for (let i = 0; i < arrExam.length; i++) {
    const divEl = document.createElement("div");
    divEl.innerHTML = arrExam[i];
    helpExamples.append(divEl);
  }
}

generateLevel(0);


const hamburger = document.querySelector(".hamburger");
const allLevels = document.querySelector(".container__all-levels");
const allLevelsWrap = document.querySelector(".container__all-levels div");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("burger-move");
  allLevels.classList.toggle("show");
  allLevelsWrap.classList.toggle('div-show')
})

function generaleLevelsList() {
  for (let i = 1; i <= 11; i++) {
    const innerP = document.createElement("p");
    if (i > 9) {
      innerP.append(`${i}\u00A0\u00A0\u00A0`);
    } else {
      innerP.append(`${i}\u00A0\u00A0\u00A0\u00A0`);
    }
    allLevelsWrap.append(innerP);
  }

  const allP = document.querySelectorAll(".container__all-levels p");
  for (let i = 0; i < allP.length; i++) {
    allP[i].append(dataLevel[i].levelName);
  }

}

generaleLevelsList();

document.addEventListener('DOMContentLoaded', function () {
  chooseLevel();
});

function chooseLevel() {
  allLevels.addEventListener('click', (event) => {
    let firstTwoLitter = event.target.innerHTML.slice(0, 2);
    let number = (firstTwoLitter.indexOf('&') !== -1) ? Number(firstTwoLitter.slice(0, 1)) : Number(firstTwoLitter);
    generateLevel(number - 1);
    allLevels.classList.remove('show');
    hamburger.classList.remove("burger-move");
  })

}

