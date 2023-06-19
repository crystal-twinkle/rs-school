// import dataLevels from "./data_levels";

const btnLeft = document.getElementById('but-left');
const btnRight = document.getElementById('but-right');
let count = 1;

btnLeft.addEventListener('click', () => {
  if (count > 1 && count <= 11) {
    count -= 1;
  }

})

btnRight.addEventListener('click', () => {
  if (count >= 1 && count < 11) {
    count += 1;
  }

})

