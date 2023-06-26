import {generateLevel} from "./index";
import {allLevels} from "./hamburger";
import {hamburger} from "./hamburger";

function chooseLevel() {
  allLevels.addEventListener('click', (event) => {
    const targetElement = event.target;
    const closestParent = targetElement.parentNode.closest('.container__all-levels p');
    const firstTwoLitter = closestParent.innerHTML.slice(0, 2);
    const number = firstTwoLitter.indexOf('&') !== -1 ? Number(firstTwoLitter.slice(0, 1)) : Number(firstTwoLitter);
    generateLevel(number - 1);
    allLevels.classList.remove('show');
    hamburger.classList.remove('burger-move');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  chooseLevel();
});
