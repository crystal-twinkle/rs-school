import {getElement} from "./check_elem";
export const hamburger = getElement<HTMLSpanElement>('.hamburger');
export const allLevels = getElement<HTMLSpanElement>('.container__all-levels');
export const allLevelsWrap = getElement<HTMLSpanElement>('.container__all-levels div');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('burger-move');
  allLevels.classList.toggle('show');
  allLevelsWrap.classList.toggle('div-show');
});


