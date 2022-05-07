import '../../node_modules/focus-visible/dist/focus-visible';

import '../scss/main.scss';
import '../index.html';

import { createWrap } from './modules/keyboardWrap';
import { createKeyboard } from './modules/keyboard';
import { keys } from './modules/keys';
import { createInfo } from './modules/info';

const body = document.querySelector('body');
const wrap = createWrap();
const keyboard = createKeyboard();
const info = createInfo();
body.append(wrap);
wrap.append(keyboard);
wrap.append(info);


for (let key in keys) {
  let keyNode = document.createElement('button');
  keyNode.innerHTML = keys[key]['en'];
  keyNode.classList.add('key');
  keyNode.id = `${key}`;
  keyboard.appendChild(keyNode);
}

document.addEventListener('keydown', (event) => {
  document.getElementById(`${event.code}`).classList.add('active');
});

document.addEventListener('keyup', (event) => {
  document.getElementById(`${event.code}`).classList.remove('active');
})



// ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

