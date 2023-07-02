import { allLevelsWrap, allLevels } from './hamburger';
import { getOfBuild } from './check_elem';
import levelsList from './levels_list';
import saveContLevels from './save_levels_list';
import { generateLevel } from './generate';

const btnReset = getOfBuild('reset');

btnReset.addEventListener('click', () => {
  allLevelsWrap.innerHTML = '';
  levelsList.generate();
  saveContLevels();
  generateLevel(0);
  allLevels.classList.remove('show');
});
