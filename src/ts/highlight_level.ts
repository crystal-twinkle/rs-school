export default function highlight() {
  const levels = document.querySelectorAll('.container__all-levels p');
  return (num: number) => {
    levels.forEach((level, i) => {
      if (i !== num) {
        level.classList.remove('checked');
      }
    });
    levels[num].classList.add('checked');
  };
}
