export const scrollToElem = (selector: string) => {
  const elem = document.querySelector(selector);

  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }
};
