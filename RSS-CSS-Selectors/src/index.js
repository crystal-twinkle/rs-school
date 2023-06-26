import dataLevel from './data_levels';
import './styles.css';

const btnLeft = document.getElementById('but-left');
const btnRight = document.getElementById('but-right');
const numberLevel = document.getElementById('level-now');
export const inputText = document.getElementById('cssEditor');
const table = document.getElementById('table');

export function generateLevel(num) {
  const helpTitle = document.getElementById('help-title');
  const helpText = document.getElementById('help-text');
  const helpExamples = document.getElementById('help-examples');
  const viewerSpan = document.getElementById('viewer-span_generate');
  const taskDesc = document.getElementById('task-desc');

  inputText.value = '';

  taskDesc.innerHTML = dataLevel[num].taskDesc;
  numberLevel.innerHTML = num + 1;
  viewerSpan.innerHTML = '';
  table.innerHTML = dataLevel[num].tableFill;

  const arrMarkup = dataLevel[num].markup;
  for (let i = 0; i < arrMarkup.length; i += 1) {
    const innerP = document.createElement('span');
    innerP.append(arrMarkup[i]);
    viewerSpan.append(innerP);
  }
  helpTitle.innerHTML = dataLevel[num].helpTitle;
  helpText.innerHTML = dataLevel[num].helpDesc;

  helpExamples.innerHTML = '';
  const arrExam = dataLevel[num].examples;
  for (let i = 0; i < arrExam.length; i += 1) {
    const divEl = document.createElement('div');
    divEl.innerHTML = arrExam[i];
    helpExamples.append(divEl);
  }
}

generateLevel(0);

btnLeft.addEventListener('click', () => {
  let count = Number(numberLevel.innerHTML) - 1;
  if (count > 0 && count <= 10) {
    count -= 1;
  }
  generateLevel(count);
});

btnRight.addEventListener('click', () => {
  let count = Number(numberLevel.innerHTML) - 1;
  if (count >= 0 && count < 10) {
    count += 1;
  }
  generateLevel(count);
});


