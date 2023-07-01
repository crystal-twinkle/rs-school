function addEffect(block: Element, addClass: string) {
  const table = document.querySelectorAll('.table *');
  for (let i = 0; i < table.length; i += 1) {
    const element = table[i];
    const dataElemTable = element.getAttribute('data-elem');
    const dataBlock = block.getAttribute('data-elem');
    if (dataElemTable === dataBlock) {
      element.classList.add(addClass);
    }
  }
  block.classList.add('highlight');
}

function removeEffect(block: Element, removeClass: string) {
  const table = document.querySelectorAll('.table *');
  block.classList.remove('highlight');
  for (let i = 0; i < table.length; i += 1) {
    const element = table[i];
    element.classList.remove(removeClass);
  }
}

function hoverTable() {
  const table = document.querySelectorAll('.table *');
  const view = document.querySelectorAll('.viewer__span *');
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
}

export default function hoverMarkup() {
  const hover1 = document.querySelectorAll('.viewer__span .hover1');
  const hover2 = document.querySelectorAll('.viewer__span .hover2');

  hover1.forEach((block) => {
    block.addEventListener('mouseover', () => {
      addEffect(block, 'backlight');
    });

    block.addEventListener('mouseout', () => {
      removeEffect(block, 'backlight');
    });
  });

  hover2.forEach((block) => {
    block.addEventListener('mouseover', (e) => {
      e.stopPropagation();
      addEffect(block, 'backlight-img');
    });

    block.addEventListener('mouseout', () => {
      removeEffect(block, 'backlight-img');
    });
  });

  hoverTable();
}
