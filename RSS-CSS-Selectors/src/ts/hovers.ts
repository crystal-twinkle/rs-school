const helper = <HTMLElement>document.querySelector('.helper');
function showHelper(tableItem: HTMLElement, viewItem: Element) {
  const hover2Element = viewItem.querySelector('.hover2');

  if (!hover2Element) {
    helper.textContent = viewItem.textContent;
  } else if (tableItem.classList.contains('bento')) {
    helper.textContent = '<div class="bento"> </div>';
  } else if (tableItem.classList.contains('plate')) {
    helper.textContent = '<div class="plate"> </div>';
  }

  const pos = tableItem.getBoundingClientRect();

  if (tableItem.classList.contains('small')) {
    helper.style.top = `${pos.top - 60}px`;
  } else {
    helper.style.top = `${pos.top - 35}px`;
  }
  if (helper.textContent.length === 49) {
    helper.style.width = '100px';
  } else if (helper.textContent.length > 51) {
    helper.style.width = '120px';
  } else {
    helper.style.width = 'auto';
  }
  helper.style.left = `${pos.left - tableItem.offsetWidth / 3}px`;
  helper.style.display = 'block';
}

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
    const tableItem = <HTMLElement>table[i];
    const dataElemTable = tableItem.getAttribute('data-elem');
    const dataBlock = block.getAttribute('data-elem');
    if (dataElemTable === dataBlock) {
      classCheck(tableItem);
      showHelper(tableItem, block);
    }
  }
  block.classList.add('highlight');
}

function removeEffect(block: Element) {
  const table = document.querySelectorAll('.table *');
  helper.style.display = 'none';
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
        const viewItem = view[i];
        const dataElem = viewItem.getAttribute('data-elem');
        if (dataElem === dataBlock) {
          showHelper(target, viewItem);
          viewItem.classList.add('highlight');
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
      helper.style.display = 'none';
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
