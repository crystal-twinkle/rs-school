import dataLevel from './data_levels';
import { allLevelsWrap } from './hamburger';

function generaleLevelsList() {
  for (let i = 1; i <= 11; i += 1) {
    const innerP = document.createElement('p');
    const innerStrong = document.createElement('strong');
    const innerSpan = document.createElement('span');
    innerSpan.classList.add('checkmark');
    innerStrong.append(`${i}\u00A0\u00A0`);

    innerP.append(innerSpan, innerStrong);

    allLevelsWrap.append(innerP);
  }

  const allP = document.querySelectorAll('.container__all-levels p');
  for (let i = 0; i < allP.length; i += 1) {
    allP[i].append(dataLevel[i].levelName);
  }
}

generaleLevelsList();
