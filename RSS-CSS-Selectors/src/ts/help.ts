import dataLevel from './data_levels';
import { getOfBuild } from './check_elem';
import { numberLevel, inputText } from './generate';

const btnHelp = getOfBuild('help-button');
const checkmarks = document.querySelectorAll('.checkmark');

btnHelp.addEventListener('click', () => {
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
        inputText.classList.remove('print-effect');
        inputText.classList.add('blink-effect');
      }, 200);
    }
  }, 200);
  checkmarks[n].classList.add('yellow');
});
