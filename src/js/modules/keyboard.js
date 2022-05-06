class Key {
  constructor(code){
    this.code = code;
    this.key = document.createElement('button');
  }

  createKey() {
    this.key.classList.add('key');
    this.key.innerHTML = `${this.code}`;
    this.key.addEventListener('keydown', (event) => {
      if (event.code === this.code) {
        this.key.style.backgroundColor = 'black';
      }
    })
  }

  getKey() {
    return this.key;
  }
}

// document.addEventListener('keydown', function(event) {
//   if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//     alert('Отменить!')
//   }
// });

const keyCodes = ['KeyQ', 'KeyW', 'KeyE'];

export class Keyboard {
  constructor(){}

  create() {
    const keyboard = document.createElement('div');
    const textArea = document.createElement('textarea');
    const keys = document.createElement('div');
  
    keyboard.classList.add('keyboard');
    textArea.classList.add('keyboard__textarea');
    keys.classList.add('keyboard__keys');
  
    keyboard.append(textArea);
    keyboard.append(keys);
  
    for (let i = 0; i < keyCodes.length; i++) {
      let key = new Key(keyCodes[i]);
      key.createKey();


      keys.append.key.getKey();
    }

    return keyboard;
  }
}