const createWrap = () => {
  const container = document.createElement('div');
  const title = document.createElement('div');
  const display = document.createElement('textarea');
  container.classList.add('container', 'keyboard-wrap');
  title.classList.add('keyboard-wrap__title');
  title.innerHTML = 'Virtual Keyboard';
  display.classList.add('keyboard-wrap__display');
  container.append(title);
  container.append(display);
  return container;
};

export default createWrap;
