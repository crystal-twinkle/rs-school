import dataLevel from './data_levels';
import '../styles.css';
import {getOfBuild} from "./check_elem";

const btnLeft = getOfBuild('but-left');
const btnRight = getOfBuild('but-right');
const numberLevel = getOfBuild('level-now');
export const inputText = getOfBuild('cssEditor');
const table = getOfBuild('table');

export function generateLevel(num: number):void {
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

  const arrMarkup: string[] = dataLevel[num].markup;
  for (let i = 0; i < arrMarkup.length; i += 1) {
    const innerP = document.createElement('span');
    innerP.append(arrMarkup[i]);
    viewerSpan.append(innerP);
  }
  helpTitle.innerHTML = dataLevel[num].helpTitle;
  helpText.innerHTML = dataLevel[num].helpDesc;

  helpExamples.innerHTML = '';
  const arrExam: string[] = dataLevel[num].examples;
  for (let i = 0; i < arrExam.length; i += 1) {
    const divEl = document.createElement('div');
    divEl.innerHTML = arrExam[i];
    helpExamples.append(divEl);
  }
}

generateLevel(0);

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


