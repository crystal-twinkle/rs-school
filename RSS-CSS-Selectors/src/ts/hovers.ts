export default function hoversMarkup() {
  const table = document.querySelectorAll('.table *');
  const hover1 = document.querySelectorAll('.viewer__span .hover1');
  const hover2 = document.querySelectorAll('.viewer__span .hover2');

  hover1.forEach((block) => {
    block.addEventListener('mouseover', () => {
      for (let i = 0; i < table.length; i += 1) {
        const element = table[i];
        const dataElem = element.getAttribute('data-elem');
        const dataBlock = block.getAttribute('data-elem');
        if (dataElem === dataBlock) {
          element.classList.add('backlight');
        }
      }

      block.classList.add('highlight');
    });

    block.addEventListener('mouseout', () => {
      for (let i = 0; i < table.length; i += 1) {
        const element = table[i];
        element.classList.remove('backlight');
      }
      block.classList.remove('highlight');
    });
  });

  hover2.forEach((block) => {
    block.addEventListener('mouseover', (e) => {
      e.stopPropagation();
      block.classList.add('highlight');
      for (let i = 0; i < table.length; i += 1) {
        const element = table[i];
        const dataElem = element.getAttribute('data-elem');
        const dataBlock = block.getAttribute('data-elem');
        if (dataElem === dataBlock) {
          element.classList.add('backlight-img');
        }
      }
    });

    block.addEventListener('mouseout', () => {
      block.classList.remove('highlight');
      for (let i = 0; i < table.length; i += 1) {
        const element = table[i];
        element.classList.remove('backlight-img');
      }
      block.classList.remove('highlight');
    });
  });
}
