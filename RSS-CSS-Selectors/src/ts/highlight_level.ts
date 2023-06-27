import { getOfBuild } from './check_elem';

const numberLevel = getOfBuild('level-now');
const levels = document.querySelectorAll('.container__all-levels p');

export default function highlight() {
  const n = Number(numberLevel.textContent) - 1;
  levels.forEach((level, i) => {
    if (i !== n) {
      level.classList.remove('checked');
    }
  });
  levels[n].classList.add('checked');
}
