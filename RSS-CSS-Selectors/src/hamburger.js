export const hamburger = document.querySelector('.hamburger');
export const allLevels = document.querySelector('.container__all-levels');
export const allLevelsWrap = document.querySelector('.container__all-levels div');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('burger-move');
  allLevels.classList.toggle('show');
  allLevelsWrap.classList.toggle('div-show');
});
