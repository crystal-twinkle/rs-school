import dataLevel from './data_levels';
import { inputText } from './generate';
import { getOfBuild, getOfQuery } from './check_elem';
import saveContLevels from './save_levels_list';
import greenCounter from './game_over';

const numberLevel = getOfBuild('level-now');
const inputButton = getOfBuild('input-button');
const actionContainer = getOfQuery('.container__action');
const checkmarks = document.querySelectorAll('.checkmark');

function addFlyOut() {
  const elements = document.querySelectorAll('*');
  for (let i = 0; i < elements.length; i += 1) {
    const element = elements[i];

    if (element.classList.contains('move-small') || element.classList.contains('move-norm')) {
      element.classList.remove('move-small');
      element.classList.remove('move-norm');
      element.classList.add('flyOut');
    }
  }
}

function inputAnswer() {
  let rightAnswer = false;
  const numIn: number = Number(numberLevel.innerHTML) - 1;
  for (let i = 0; i < dataLevel[numIn].answer.length; i += 1) {
    const e = dataLevel[numIn].answer[i];
    if (inputText instanceof HTMLInputElement) {
      if (inputText.value === e) {
        rightAnswer = true;
        addFlyOut();
        checkmarks[numIn].classList.add('green');
        greenCounter();
        saveContLevels();
      }
    }
  }
  if (!rightAnswer) {
    actionContainer.classList.add('shake');
    setTimeout(() => {
      actionContainer.classList.remove('shake');
    }, 400);
  }
}

inputButton.addEventListener('click', () => {
  inputAnswer();
});

inputText.addEventListener('keypress', (e: KeyboardEvent) => {
  if (e.code === 'Enter') {
    inputAnswer();
  }
});
