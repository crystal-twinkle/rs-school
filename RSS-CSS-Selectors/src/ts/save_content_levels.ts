import { getOfQuery } from './check_elem';
import generateLevelsList from './levels_list';

const allLevel = getOfQuery('.all-levels-wrap');

export default function saveContLevels() {
  localStorage.setItem('containerLevel', allLevel.innerHTML);
}

function loadContLevels() {
  const local = localStorage.getItem('containerLevel');
  if (local) {
    allLevel.innerHTML = local;
  } else {
    generateLevelsList();
  }
}

loadContLevels();
