import { getOfQuery } from './check_elem';
import levelsList from './levels_list';

const allLevel = getOfQuery('.all-levels-wrap');

export default function saveContLevels() {
  setTimeout(() => localStorage.setItem('containerLevel', allLevel.innerHTML), 0);
}

function loadContLevels() {
  const local = localStorage.getItem('containerLevel');
  console.log(local);
  if (local) {
    allLevel.innerHTML = local;
  } else {
    levelsList.generate();
  }
}

loadContLevels();
