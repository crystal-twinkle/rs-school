export default function hoversMarkup() {
  const table = document.querySelectorAll('.table *');
  const view = document.querySelectorAll('.viewer__span *');
  const hover1 = document.querySelectorAll('.viewer__span .hover1');
  const hover2 = document.querySelectorAll('.viewer__span .hover2');

  const arr: string[] = ['watermelon', 'cucumber', 'pineapple'];
  table.forEach((something) => {
    something.addEventListener('mouseover', (event) => {
      const target = <HTMLElement>event.target;
      if (target.classList.contains('backlight-img')) {
        return;
      }
      let hasClass = false;
      const dataBlock = something.getAttribute('data-elem');
      const targetElement = document.querySelector(`[data-elem="${dataBlock}"]`);
      for (let i = 0; i < view.length; i += 1) {
        const element = view[i];
        const dataElem = element.getAttribute('data-elem');
        if (dataElem === dataBlock) {
          element.classList.add('highlight');
        }
      }
      arr.forEach((className) => {
        if (targetElement.classList.contains(className)) {
          hasClass = true;
          something.classList.add('backlight-img');
        }
      });

      if (!hasClass) {
        something.classList.add('backlight');
      }
    });

    something.addEventListener('mouseout', () => {
      for (let i = 0; i < view.length; i += 1) {
        const element = view[i];
        element.classList.remove('highlight');
      }
      something.classList.remove('backlight');
      something.classList.remove('backlight-img');
    });
  });

  hover1.forEach((block) => {
    block.addEventListener('mouseover', () => {
      for (let i = 0; i < table.length; i += 1) {
        const element = table[i];
        const dataElemTable = element.getAttribute('data-elem');
        const dataBlock = block.getAttribute('data-elem');
        if (dataElemTable === dataBlock) {
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
        const dataElemTable = element.getAttribute('data-elem');
        const dataBlock = block.getAttribute('data-elem');
        if (dataElemTable === dataBlock) {
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
