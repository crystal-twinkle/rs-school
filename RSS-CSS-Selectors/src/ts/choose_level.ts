import { generateLevel } from './generate';
import { allLevels, hamburger } from './hamburger';

function chooseLevel(): void {
  allLevels.addEventListener('click', (event: Event) => {
    const { target } = event;
    if (target instanceof HTMLElement) {
      const closest: HTMLElement | null = target.closest('.container__all-levels p');
      if (closest === null) return;
      const firstTwoLitter: string = closest.innerHTML.slice(0, 2);
      const number: number =
        firstTwoLitter.indexOf('&') !== -1 ? Number(firstTwoLitter.slice(0, 1)) : Number(firstTwoLitter);
      generateLevel(number - 1);
      allLevels.classList.remove('show');
      hamburger.classList.remove('burger-move');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  chooseLevel();
});
