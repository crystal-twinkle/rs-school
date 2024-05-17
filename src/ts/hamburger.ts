import { getOfQuery } from './check_elem';

export const hamburger = getOfQuery<HTMLSpanElement>('.hamburger');
export const allLevels = getOfQuery<HTMLSpanElement>('.container__all-levels');
export const allLevelsWrap = getOfQuery<HTMLSpanElement>('.container__all-levels div');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('burger-move');
  allLevels.classList.toggle('show');
  allLevelsWrap.classList.toggle('div-show');
});
