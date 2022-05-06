import '../../node_modules/focus-visible/dist/focus-visible';

import '../scss/main.scss';
import '../index.html';

import { createWrap } from './modules/keyboardWrap';
import { keysItems } from './modules/keysItems';
import { Keyboard } from './modules/keyboard';

const body = document.querySelector('body');
const wrap = createWrap();
const keyboard = new Keyboard();

body.append(wrap);
wrap.append(keyboard.create());

console.log(keysItems);