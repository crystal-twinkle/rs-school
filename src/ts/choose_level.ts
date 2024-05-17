import { allLevels, hamburger } from './hamburger';
import { generateLevel } from './generate';
import highlight from './highlight_level';

allLevels.addEventListener('click', (event: Event) => {
  const { target } = event;
  if (target instanceof HTMLElement) {
    const closest: HTMLElement | null = target.closest('.container__all-levels p');

    if (closest === null) return;
    const spanElement = closest.querySelector('strong');
    if (spanElement === null) return;
    const number = Number(spanElement.textContent);
    generateLevel(number - 1);
    highlight()(number - 1);
    allLevels.classList.remove('show');
    hamburger.classList.remove('burger-move');
  }
});
