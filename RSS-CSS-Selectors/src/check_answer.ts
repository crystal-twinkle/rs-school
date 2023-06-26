import dataLevel from "./data_levels";
import {generateLevel} from "./index";
import {getOfBuild} from "./check_elem";
import {getOfQuery} from "./check_elem";
import {inputText} from "./index";

const numberLevel = getOfBuild('level-now');
const inputButton = getOfBuild('input-button');
const actionContainer = getOfQuery('.container__action');

function inputAnswer() {
  const numIn: number = Number(numberLevel.innerHTML) - 1;
  for (let i = 0; i < dataLevel[numIn].answer.length; i += 1) {
    const e = dataLevel[numIn].answer[i];
    if (inputText instanceof HTMLInputElement) {
      if (inputText.value === e) {
        addFlyOut();
        setTimeout(() => {
          generateLevel(numIn + 1);
        }, 1000);
      } else {
        actionContainer.classList.add('shake');
        setTimeout(() => {
          actionContainer.classList.remove('shake');
        }, 400);
      }
    }
  }
}

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

inputButton.addEventListener('click', () => {
  inputAnswer();
});

inputText.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') {
    inputAnswer();
  }
});
