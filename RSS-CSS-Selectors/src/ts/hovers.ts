export default function hoversMarkup() {
  const hover1 = document.querySelectorAll('.viewer__span .hover1');
  const hover2 = document.querySelectorAll('.viewer__span .hover2');
  hover1.forEach((block) => {
    block.addEventListener('mouseover', () => {
      block.classList.add('highlight');
    });

    block.addEventListener('mouseout', () => {
      block.classList.remove('highlight');
    });
  });

  hover2.forEach((block) => {
    block.addEventListener('mouseover', (e) => {
      e.stopPropagation();
      block.classList.add('highlight');
    });

    block.addEventListener('mouseout', () => {
      block.classList.remove('highlight');
    });
  });
}

// function hoversMarkup() {
//   const viewerSpan = getOfQuery('.viewer__span');
//
//   viewerSpan.addEventListener('mouseover', (event) => {
//     const target = <HTMLDivElement>event.target;
//
//     if (target.classList.contains('hover1')) {
//       target.classList.add('highlight');
//       if (target.classList.contains('hover2')) {
//         event.stopPropagation();
//         target.classList.add('highlight');
//       }
//     }
//   });
//
//   viewerSpan.addEventListener('mouseout', (event) => {
//     const target = <HTMLDivElement>event.target;
//     if (target.classList.contains('hover1')) {
//       target.classList.remove('highlight');
//     } else if (target.classList.contains('hover2')) {
//       target.classList.remove('highlight');
//     }
//   });
// }

// window.addEventListener('load', hoversMarkup)
