export const scrollToElem = (selector: string) => {
  const elem = document.querySelector(selector);
  const wrapper = document.querySelector('#wrapper') as HTMLDivElement;

  if (wrapper) {
    setTimeout(() => {
      wrapper.scrollTo({ left: 0, behavior: 'smooth' });
    }, 100);
  }

  if (elem) {
    setTimeout(() => {
      elem.scrollIntoView({ behavior: 'smooth' });
    });
  }
};
