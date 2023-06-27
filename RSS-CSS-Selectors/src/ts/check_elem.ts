export const getOfQuery = <T extends HTMLElement>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new TypeError('Oh..You have type null here :(');
  }
  return element;
};

export const getOfBuild = (selector: string): HTMLElement => {
  const element = document.getElementById(selector);
  if (!element) {
    throw new TypeError('Oh..You have type null here :(');
  }
  return element;
};
