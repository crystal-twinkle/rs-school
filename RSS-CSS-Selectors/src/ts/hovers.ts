function classCheck(elem: Element) {
  if (elem.closest('.pineapple, .cucumber, .watermelon')) {
    elem.classList.add('backlight-img');
  } else {
    elem.classList.add('backlight');
  }
}

function addEffect(block: Element) {
  const table = document.querySelectorAll('.table *');
  for (let i = 0; i < table.length; i += 1) {
    const element = table[i];
    const dataElemTable = element.getAttribute('data-elem');
    const dataBlock = block.getAttribute('data-elem');
    if (dataElemTable === dataBlock) {
      classCheck(element);
    }
  }
  block.classList.add('highlight');
}

function removeEffect(block: Element) {
  const table = document.querySelectorAll('.table *');
  block.classList.remove('highlight');
  for (let i = 0; i < table.length; i += 1) {
    const element = table[i];
    element.classList.remove('backlight');
    element.classList.remove('backlight-img');
  }
}

function hoverTable() {
  const table = document.querySelectorAll('.table *');
  const view = document.querySelectorAll('.viewer__span *');
  table.forEach((something) => {
    something.addEventListener('mouseover', (event) => {
      const target = <HTMLElement>event.target;
      if (target.classList.contains('backlight-img')) {
        return;
      }
      const dataBlock = something.getAttribute('data-elem');
      for (let i = 0; i < view.length; i += 1) {
        const element = view[i];
        const dataElem = element.getAttribute('data-elem');
        if (dataElem === dataBlock) {
          element.classList.add('highlight');
        }
      }
      classCheck(target);
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
      addEffect(block);
      block.classList.add('highlight');
    });

    block.addEventListener('mouseout', () => {
      removeEffect(block);
    });
  });

  hover2.forEach((block) => {
    block.addEventListener('mouseover', (e) => {
      e.stopPropagation();
      addEffect(block);
    });

    block.addEventListener('mouseout', () => {
      removeEffect(block);
    });
  });

  hoverTable();
}
