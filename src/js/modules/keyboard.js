// document.addEventListener('keydown', function(event) {
//   if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//     alert('Отменить!')
//   }
// });

export const createKeyboard = () => {
  const keyboard = document.createElement('div');

  keyboard.classList.add('keyboard');

  return keyboard;
}