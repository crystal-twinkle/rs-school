import { generateLevel, numberLevel } from './generate';

function gameOver(greenCount: number) {
  const numIn: number = Number(numberLevel.innerHTML) - 1;
  if (greenCount === 11) {
    const table = document.querySelector('.table');
    const gameDesc = document.querySelector('.game__desc');
    gameDesc.innerHTML = 'Поздравляю! Теперь вы сильны в CSS';
    table.innerHTML = ' ';
  } else {
    setTimeout(() => {
      generateLevel(numIn + 1);
    }, 1000);
  }
}

export default function greenCounter() {
  const paragraphs = document.querySelectorAll('.all-levels-wrap p'); // выбираем все элементы <p>
  let greenCount = 0;
  paragraphs.forEach((paragraph) => {
    const paragraphOuter = paragraph.outerHTML;
    const greenMatches = paragraphOuter.match(/green/g);
    if (greenMatches) {
      greenCount += greenMatches.length;
    }
  });

  gameOver(greenCount);
}
