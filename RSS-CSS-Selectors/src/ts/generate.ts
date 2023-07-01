import { getOfBuild } from './check_elem';
import dataLevel from './data_levels';
import highlight from './highlight_level';
import hoverMarkup from './hovers';

const btnLeft = getOfBuild('but-left');
const btnRight = getOfBuild('but-right');
export const numberLevel = getOfBuild('level-now');
export const inputText = getOfBuild('cssEditor');
const table = getOfBuild('table');

function saveLevelGame() {
  const level = numberLevel.textContent;
  if (level) {
    localStorage.setItem('level', level);
  }
}

export function generateLevel(num: number): void {
  const helpTitle = getOfBuild('help-title');
  const helpText = getOfBuild('help-text');
  const helpExamples = getOfBuild('help-examples');
  const viewerSpan = getOfBuild('viewer-span_generate');
  const taskDesc = getOfBuild('task-desc');

  if (inputText instanceof HTMLInputElement) inputText.value = '';

  taskDesc.innerHTML = dataLevel[num].taskDesc;
  if (typeof numberLevel === 'object') numberLevel.innerHTML = String(num + 1);
  viewerSpan.innerHTML = '';
  table.innerHTML = dataLevel[num].tableFill;
  viewerSpan.innerHTML = dataLevel[num].markup;
  helpTitle.innerHTML = dataLevel[num].helpTitle;
  helpText.innerHTML = dataLevel[num].helpDesc;
  helpExamples.innerHTML = '';
  const arrExam: string[] = dataLevel[num].examples;
  for (let i = 0; i < arrExam.length; i += 1) {
    const divEl = document.createElement('div');
    divEl.innerHTML = arrExam[i];
    helpExamples.append(divEl);
  }
  setTimeout(() => {
    highlight()(Number(numberLevel.textContent) - 1);
    hoverMarkup();
  }, 0);
  saveLevelGame();
}

btnLeft.addEventListener('click', () => {
  let count: number = Number(numberLevel.innerHTML) - 1;
  if (count > 0 && count <= 10) {
    count -= 1;
  }
  generateLevel(count);
});

btnRight.addEventListener('click', () => {
  let count: number = Number(numberLevel.innerHTML) - 1;
  if (count >= 0 && count < 10) {
    count += 1;
  }
  generateLevel(count);
});

function loadLevelGame() {
  const local = localStorage.getItem('level');
  if (local) {
    const number = Number(local) - 1;
    generateLevel(number);
  } else {
    generateLevel(0);
  }
}

loadLevelGame();
