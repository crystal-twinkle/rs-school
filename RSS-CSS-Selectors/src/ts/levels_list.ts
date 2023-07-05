import dataLevel from './data_levels';
import { allLevelsWrap } from './hamburger';

class LevelsList {
  public generate() {
    for (let i = 1; i <= 11; i += 1) {
      const innerP = document.createElement('p');
      const innerStrong = document.createElement('strong');
      const innerSpan1 = document.createElement('span');
      const innerSpan2 = document.createElement('span');
      innerSpan1.classList.add('checkmark');
      innerSpan2.classList.add('span-help');
      innerStrong.append(`${i}\u00A0\u00A0`);

      innerP.append(innerSpan1, innerStrong, innerSpan2);
      allLevelsWrap.append(innerP);
    }

    const allP = document.querySelectorAll('.container__all-levels p');
    for (let i = 0; i < allP.length; i += 1) {
      allP[i].append(dataLevel[i].levelName);
    }
  }
}

const levelsList = new LevelsList();
export default levelsList;
