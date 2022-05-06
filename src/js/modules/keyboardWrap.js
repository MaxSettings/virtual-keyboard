export const createWrap = () => {
  const container = document.createElement('div');
  const title = document.createElement('div');

  container.classList.add('container', 'keyboard-wrap');
  title.classList.add('keyboard-wrap__title');
  title.innerHTML = 'Virtual Keyboard';

  container.append(title);
  
  return container;
}