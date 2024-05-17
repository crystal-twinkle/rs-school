import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';

window.addEventListener('DOMContentLoaded', () => {
  const justs = document.querySelectorAll('.just');
  justs.forEach((e) => {
    Prism.highlightElement(e);
  });
});

export default function highlightCode() {
  const codeHovers1 = document.querySelectorAll('div.hover1');
  const arrForHover2: NodeListOf<Element>[] = [];
  for (let i = 0; i < codeHovers1.length; i += 1) {
    const hovers2in = codeHovers1[i].querySelectorAll('.hover2');
    arrForHover2.push(hovers2in);

    hovers2in.forEach((innerHover2) => {
      innerHover2.remove();
    });

    codeHovers1[i].classList.add('language-js');
    Prism.highlightElement(codeHovers1[i]);

    if (arrForHover2.length > 0) {
      const innerCodeContent = Array.from(arrForHover2[i])
        .map((element) => element.outerHTML)
        .join('');
      codeHovers1[i].insertAdjacentHTML('beforeend', innerCodeContent);
      codeHovers1[i].insertAdjacentHTML('beforeend', '&lt;/div');
    }
  }
  setTimeout(() => {
    const hovers2 = document.querySelectorAll('.hover2');
    hovers2.forEach((hover2) => {
      hover2.classList.add('language-js');
      Prism.highlightElement(hover2);
    });
  }, 0);
}

highlightCode();
