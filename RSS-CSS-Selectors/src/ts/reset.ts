import { allLevelsWrap } from './hamburger';
import { getOfBuild } from './check_elem';
import generateLevelsList from './levels_list';
import saveContLevels from './save_content_levels';

const btnReset = getOfBuild('reset');

btnReset.addEventListener('click', () => {
  allLevelsWrap.innerHTML = '';
  generateLevelsList();
  saveContLevels();
});
