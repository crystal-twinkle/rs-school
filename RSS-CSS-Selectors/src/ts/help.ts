import dataLevel from './data_levels';
import { getOfBuild } from './check_elem';
import { numberLevel, inputText, generateLevel } from './generate';
import saveContLevels from './save_levels_list';

const btnLeft = getOfBuild('but-left');
const btnRight = getOfBuild('but-right');
const btnHelp = getOfBuild('help-button');

let clickHelp = false;

btnLeft.addEventListener('click', () => {
  if (clickHelp) {
    return;
  }
  let count: number = Number(numberLevel.innerHTML) - 1;
  if (count > 0 && count <= 10) {
    count -= 1;
  }
  generateLevel(count);
});

btnRight.addEventListener('click', () => {
  if (clickHelp) {
    return;
  }
  let count: number = Number(numberLevel.innerHTML) - 1;
  if (count >= 0 && count < 10) {
    count += 1;
  }
  generateLevel(count);
});
const spanHelp = document.querySelectorAll('.span-help');
btnHelp.addEventListener('click', () => {
  clickHelp = true;
  if (inputText instanceof HTMLInputElement) inputText.value = '';
  inputText.classList.remove('blink-effect');
  inputText.classList.add('print-effect');
  const n = Number(numberLevel.textContent) - 1;
  const answer: string = dataLevel[n].answer[0];
  const chars = answer.split('');
  let index = 0;
  const printInterval = setInterval(() => {
    if (inputText instanceof HTMLInputElement) inputText.value += chars[index];

    index += 1;
    if (index >= chars.length) {
      clearInterval(printInterval);
      setTimeout(() => {
        clickHelp = false;
        inputText.classList.remove('print-effect');
        inputText.classList.add('blink-effect');
      }, 200);
    }
  }, 200);
  spanHelp[n].classList.add('yellow');
  saveContLevels();
});
