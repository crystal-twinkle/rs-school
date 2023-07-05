import { getOfQuery } from './check_elem';
import levelsList from './levels_list';
import yellowAndGreenCounter from './game_over';

const allLevel = getOfQuery('.all-levels-wrap');

export default function saveContLevels() {
  localStorage.setItem('containerLevel', allLevel.innerHTML);
}

function loadContLevels() {
  const local = localStorage.getItem('containerLevel');
  if (local) {
    allLevel.innerHTML = local;
    yellowAndGreenCounter();
  } else {
    levelsList.generate();
  }
}

loadContLevels();
