function gameOver(greenCount: number, yellowCount: number) {
  console.log('2');
  if (greenCount + yellowCount === 11) {
    console.log('1');
    const table = document.querySelector('.table');
    const gameDesc = document.querySelector('.game__desc');
    gameDesc.innerHTML = 'Поздравляю! Теперь вы сильны в CSS';
    table.innerHTML = ' ';
  }
}

export default function yellowAndGreenCounter() {
  const paragraphs = document.querySelectorAll('.all-levels-wrap p'); // выбираем все элементы <p>
  let greenCount = 0;
  let yellowCount = 0;

  paragraphs.forEach((paragraph) => {
    const paragraphOuter = paragraph.outerHTML;
    const greenMatches = paragraphOuter.match(/green/g);
    const yellowMatches = paragraphOuter.match(/yellow/g);
    if (greenMatches) {
      greenCount += greenMatches.length;
    }

    if (yellowMatches) {
      yellowCount += yellowMatches.length;
    }
  });

  gameOver(greenCount, yellowCount);
}
