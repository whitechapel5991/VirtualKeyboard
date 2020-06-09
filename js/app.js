const symbolStatesEnum = {
  caseDown: { value: 1, name: 'caseDown', selector: '.caseDown' },
  caseUp: { value: 2, name: 'caseUp', selector: '.caseUp' },
  caps: { value: 3, name: 'caps', selector: '.caps' },
  shiftCaps: { value: 4, name: 'shiftCaps', selector: '.shiftCaps' },
};

// CREATE DOM methods
function createDOM() {
  function createElement(tagName, classArray, text) {
    const elem = document.createElement(tagName);

    classArray.forEach((classStr) => elem.classList.add(classStr));

    if (text !== undefined) elem.innerHTML = text;

    return elem;
  }

  function createDiv(classArray, text) {
    return createElement('div', classArray, text);
  }

  function createSpan(classArray, text) {
    return createElement('span', classArray, text);
  }

  function createKeyboard() {
    const firstRowKeys = [
      {
        key: 'Backquote',
        rus: {
          caseDown: 'ё',
          caseUp: 'Ё',
          caps: 'Ё',
          shiftCaps: 'ё',
        },
        eng: {
          caseDown: '`',
          caseUp: '~',
          caps: '`',
          shiftCaps: '~',
        },
      },
      {
        key: 'Digit1',
        rus: {
          caseDown: '1',
          caseUp: '!',
          caps: '1',
          shiftCaps: '!',
        },
        eng: {
          caseDown: '1',
          caseUp: '!',
          caps: '1',
          shiftCaps: '!',
        },
      },
      {
        key: 'Digit2',
        rus: {
          caseDown: '2',
          caseUp: '"',
          caps: '2',
          shiftCaps: '"',
        },
        eng: {
          caseDown: '2',
          caseUp: '@',
          caps: '2',
          shiftCaps: '@',
        },
      },
      {
        key: 'Digit3',
        rus: {
          caseDown: '3',
          caseUp: '№',
          caps: '3',
          shiftCaps: '№',
        },
        eng: {
          caseDown: '3',
          caseUp: '#',
          caps: '3',
          shiftCaps: '#',
        },
      },
      {
        key: 'Digit4',
        rus: {
          caseDown: '4',
          caseUp: ';',
          caps: '4',
          shiftCaps: ';',
        },
        eng: {
          caseDown: '4',
          caseUp: '$',
          caps: '4',
          shiftCaps: '$',
        },
      },
      {
        key: 'Digit5',
        rus: {
          caseDown: '5',
          caseUp: '%',
          caps: '5',
          shiftCaps: '%',
        },
        eng: {
          caseDown: '5',
          caseUp: '%',
          caps: '5',
          shiftCaps: '%',
        },
      },
      {
        key: 'Digit6',
        rus: {
          caseDown: '6',
          caseUp: ':',
          caps: '6',
          shiftCaps: ':',
        },
        eng: {
          caseDown: '6',
          caseUp: '^',
          caps: '6',
          shiftCaps: '^',
        },
      },
      {
        key: 'Digit7',
        rus: {
          caseDown: '7',
          caseUp: '?',
          caps: '7',
          shiftCaps: '?',
        },
        eng: {
          caseDown: '7',
          caseUp: '&',
          caps: '7',
          shiftCaps: '&',
        },
      },
      {
        key: 'Digit8',
        rus: {
          caseDown: '8',
          caseUp: '*',
          caps: '8',
          shiftCaps: '*',
        },
        eng: {
          caseDown: '8',
          caseUp: '*',
          caps: '8',
          shiftCaps: '*',
        },
      },
      {
        key: 'Digit9',
        rus: {
          caseDown: '9',
          caseUp: '(',
          caps: '9',
          shiftCaps: '(',
        },
        eng: {
          caseDown: '9',
          caseUp: '(',
          caps: '9',
          shiftCaps: '(',
        },
      },
      {
        key: 'Digit0',
        rus: {
          caseDown: '0',
          caseUp: ')',
          caps: '0',
          shiftCaps: ')',
        },
        eng: {
          caseDown: '0',
          caseUp: ')',
          caps: '0',
          shiftCaps: ')',
        },
      },
      {
        key: 'Minus',
        rus: {
          caseDown: '-',
          caseUp: '_',
          caps: '-',
          shiftCaps: '_',
        },
        eng: {
          caseDown: '-',
          caseUp: '_',
          caps: '-',
          shiftCaps: '_',
        },
      },
      {
        key: 'Equal',
        rus: {
          caseDown: '=',
          caseUp: '+',
          caps: '=',
          shiftCaps: '+',
        },
        eng: {
          caseDown: '=',
          caseUp: '+',
          caps: '=',
          shiftCaps: '+',
        },
      },
      {
        key: 'Backspace',
        rus: {
          caseDown: 'Backspace',
          caseUp: 'Backspace',
          caps: 'Backspace',
          shiftCaps: 'Backspace',
        },
        eng: {
          caseDown: 'Backspace',
          caseUp: 'Backspace',
          caps: 'Backspace',
          shiftCaps: 'Backspace',
        },
      },
    ];
    const secondRowKeys = [
      {
        key: 'Tab',
        rus: {
          caseDown: 'Tab',
          caseUp: 'Tab',
          caps: 'Tab',
          shiftCaps: 'Tab',
        },
        eng: {
          caseDown: 'Tab',
          caseUp: 'Tab',
          caps: 'Tab',
          shiftCaps: 'Tab',
        },
      },
      {
        key: 'KeyQ',
        rus: {
          caseDown: 'й',
          caseUp: 'Й',
          caps: 'Й',
          shiftCaps: 'й',
        },
        eng: {
          caseDown: 'q',
          caseUp: 'Q',
          caps: 'Q',
          shiftCaps: 'q',
        },
      },
      {
        key: 'KeyW',
        rus: {
          caseDown: 'ц',
          caseUp: 'Ц',
          caps: 'Ц',
          shiftCaps: 'ц',
        },
        eng: {
          caseDown: 'w',
          caseUp: 'W',
          caps: 'W',
          shiftCaps: 'w',
        },
      },
      {
        key: 'KeyE',
        rus: {
          caseDown: 'у',
          caseUp: 'У',
          caps: 'У',
          shiftCaps: 'у',
        },
        eng: {
          caseDown: 'e',
          caseUp: 'E',
          caps: 'E',
          shiftCaps: 'e',
        },
      },
      {
        key: 'KeyR',
        rus: {
          caseDown: 'к',
          caseUp: 'К',
          caps: 'К',
          shiftCaps: 'к',
        },
        eng: {
          caseDown: 'r',
          caseUp: 'R',
          caps: 'R',
          shiftCaps: 'r',
        },
      },
      {
        key: 'KeyT',
        rus: {
          caseDown: 'е',
          caseUp: 'Е',
          caps: 'Е',
          shiftCaps: 'е',
        },
        eng: {
          caseDown: 't',
          caseUp: 'T',
          caps: 'T',
          shiftCaps: 't',
        },
      },
      {
        key: 'KeyY',
        rus: {
          caseDown: 'н',
          caseUp: 'Н',
          caps: 'Н',
          shiftCaps: 'н',
        },
        eng: {
          caseDown: 'y',
          caseUp: 'Y',
          caps: 'Y',
          shiftCaps: 'y',
        },
      },
      {
        key: 'KeyU',
        rus: {
          caseDown: 'г',
          caseUp: 'Г',
          caps: 'Г',
          shiftCaps: 'г',
        },
        eng: {
          caseDown: 'u',
          caseUp: 'U',
          caps: 'U',
          shiftCaps: 'u',
        },
      },
      {
        key: 'KeyI',
        rus: {
          caseDown: 'ш',
          caseUp: 'Ш',
          caps: 'Ш',
          shiftCaps: 'ш',
        },
        eng: {
          caseDown: 'i',
          caseUp: 'I',
          caps: 'I',
          shiftCaps: 'i',
        },
      },
      {
        key: 'KeyO',
        rus: {
          caseDown: 'щ',
          caseUp: 'Щ',
          caps: 'Щ',
          shiftCaps: 'щ',
        },
        eng: {
          caseDown: 'o',
          caseUp: 'O',
          caps: 'O',
          shiftCaps: 'o',
        },
      },
      {
        key: 'KeyP',
        rus: {
          caseDown: 'з',
          caseUp: 'З',
          caps: 'З',
          shiftCaps: 'з',
        },
        eng: {
          caseDown: 'p',
          caseUp: 'P',
          caps: 'P',
          shiftCaps: 'p',
        },
      },
      {
        key: 'BracketLeft',
        rus: {
          caseDown: 'х',
          caseUp: 'Х',
          caps: 'Х',
          shiftCaps: 'х',
        },
        eng: {
          caseDown: '[',
          caseUp: '{',
          caps: '[',
          shiftCaps: '{',
        },
      },
      {
        key: 'BracketRight',
        rus: {
          caseDown: 'ъ',
          caseUp: 'Ъ',
          caps: 'Ъ',
          shiftCaps: 'ъ',
        },
        eng: {
          caseDown: ']',
          caseUp: '}',
          caps: ']',
          shiftCaps: '}',
        },
      },
      {
        key: 'Backslash',
        rus: {
          caseDown: '\\',
          caseUp: '/',
          caps: '\\',
          shiftCaps: '/',
        },
        eng: {
          caseDown: '\\',
          caseUp: '|',
          caps: '\\',
          shiftCaps: '|',
        },
      },
      {
        key: 'Delete',
        rus: {
          caseDown: 'Del',
          caseUp: 'Del',
          caps: 'Del',
          shiftCaps: 'Del',
        },
        eng: {
          caseDown: 'Del',
          caseUp: 'Del',
          caps: 'Del',
          shiftCaps: 'Del',
        },
      },
    ];
    const thirdRowKeys = [
      {
        key: 'CapsLock',
        rus: {
          caseDown: 'CapsLock',
          caseUp: 'CapsLock',
          caps: 'CapsLock',
          shiftCaps: 'CapsLock',
        },
        eng: {
          caseDown: 'CapsLock',
          caseUp: 'CapsLock',
          caps: 'CapsLock',
          shiftCaps: 'CapsLock',
        },
      },
      {
        key: 'KeyA',
        rus: {
          caseDown: 'ф',
          caseUp: 'Ф',
          caps: 'Ф',
          shiftCaps: 'ф',
        },
        eng: {
          caseDown: 'a',
          caseUp: 'A',
          caps: 'A',
          shiftCaps: 'a',
        },
      },
      {
        key: 'KeyS',
        rus: {
          caseDown: 'ы',
          caseUp: 'Ы',
          caps: 'Ы',
          shiftCaps: 'ы',
        },
        eng: {
          caseDown: 's',
          caseUp: 'S',
          caps: 'S',
          shiftCaps: 's',
        },
      },
      {
        key: 'KeyD',
        rus: {
          caseDown: 'в',
          caseUp: 'В',
          caps: 'В',
          shiftCaps: 'в',
        },
        eng: {
          caseDown: 'd',
          caseUp: 'D',
          caps: 'D',
          shiftCaps: 'd',
        },
      },
      {
        key: 'KeyF',
        rus: {
          caseDown: 'а',
          caseUp: 'А',
          caps: 'А',
          shiftCaps: 'а',
        },
        eng: {
          caseDown: 'f',
          caseUp: 'F',
          caps: 'F',
          shiftCaps: 'f',
        },
      },
      {
        key: 'KeyG',
        rus: {
          caseDown: 'п',
          caseUp: 'П',
          caps: 'П',
          shiftCaps: 'п',
        },
        eng: {
          caseDown: 'g',
          caseUp: 'G',
          caps: 'G',
          shiftCaps: 'g',
        },
      },
      {
        key: 'KeyH',
        rus: {
          caseDown: 'р',
          caseUp: 'Р',
          caps: 'Р',
          shiftCaps: 'р',
        },
        eng: {
          caseDown: 'h',
          caseUp: 'H',
          caps: 'H',
          shiftCaps: 'h',
        },
      },
      {
        key: 'KeyJ',
        rus: {
          caseDown: 'о',
          caseUp: 'О',
          caps: 'О',
          shiftCaps: 'о',
        },
        eng: {
          caseDown: 'j',
          caseUp: 'J',
          caps: 'J',
          shiftCaps: 'j',
        },
      },
      {
        key: 'KeyK',
        rus: {
          caseDown: 'л',
          caseUp: 'Л',
          caps: 'Л',
          shiftCaps: 'л',
        },
        eng: {
          caseDown: 'k',
          caseUp: 'K',
          caps: 'K',
          shiftCaps: 'k',
        },
      },
      {
        key: 'KeyL',
        rus: {
          caseDown: 'д',
          caseUp: 'Д',
          caps: 'Д',
          shiftCaps: 'д',
        },
        eng: {
          caseDown: 'l',
          caseUp: 'L',
          caps: 'L',
          shiftCaps: 'l',
        },
      },
      {
        key: 'Semicolon',
        rus: {
          caseDown: 'ж',
          caseUp: 'Ж',
          caps: 'Ж',
          shiftCaps: 'ж',
        },
        eng: {
          caseDown: ';',
          caseUp: ':',
          caps: ';',
          shiftCaps: ':',
        },
      },
      {
        key: 'Quote',
        rus: {
          caseDown: 'э',
          caseUp: 'Э',
          caps: 'Э',
          shiftCaps: 'э',
        },
        eng: {
          caseDown: "'",
          caseUp: '"',
          caps: "'",
          shiftCaps: '"',
        },
      },
      {
        key: 'Enter',
        rus: {
          caseDown: 'Enter',
          caseUp: 'Enter',
          caps: 'Enter',
          shiftCaps: 'Enter',
        },
        eng: {
          caseDown: 'Enter',
          caseUp: 'Enter',
          caps: 'Enter',
          shiftCaps: 'Enter',
        },
      },
    ];
    const fourthRowKeys = [
      {
        key: 'ShiftLeft',
        rus: {
          caseDown: 'Shift',
          caseUp: 'Shift',
          caps: 'Shift',
          shiftCaps: 'Shift',
        },
        eng: {
          caseDown: 'Shift',
          caseUp: 'Shift',
          caps: 'Shift',
          shiftCaps: 'Shift',
        },
      },
      {
        key: 'KeyZ',
        rus: {
          caseDown: 'я',
          caseUp: 'Я',
          caps: 'Я',
          shiftCaps: 'я',
        },
        eng: {
          caseDown: 'z',
          caseUp: 'Z',
          caps: 'Z',
          shiftCaps: 'z',
        },
      },
      {
        key: 'KeyX',
        rus: {
          caseDown: 'ч',
          caseUp: 'Ч',
          caps: 'Ч',
          shiftCaps: 'ч',
        },
        eng: {
          caseDown: 'x',
          caseUp: 'X',
          caps: 'X',
          shiftCaps: 'x',
        },
      },
      {
        key: 'KeyC',
        rus: {
          caseDown: 'с',
          caseUp: 'С',
          caps: 'С',
          shiftCaps: 'с',
        },
        eng: {
          caseDown: 'c',
          caseUp: 'C',
          caps: 'C',
          shiftCaps: 'c',
        },
      },
      {
        key: 'KeyV',
        rus: {
          caseDown: 'м',
          caseUp: 'М',
          caps: 'М',
          shiftCaps: 'м',
        },
        eng: {
          caseDown: 'v',
          caseUp: 'V',
          caps: 'V',
          shiftCaps: 'v',
        },
      },
      {
        key: 'KeyB',
        rus: {
          caseDown: 'и',
          caseUp: 'И',
          caps: 'И',
          shiftCaps: 'и',
        },
        eng: {
          caseDown: 'b',
          caseUp: 'B',
          caps: 'B',
          shiftCaps: 'b',
        },
      },
      {
        key: 'KeyN',
        rus: {
          caseDown: 'т',
          caseUp: 'Т',
          caps: 'Т',
          shiftCaps: 'т',
        },
        eng: {
          caseDown: 'n',
          caseUp: 'N',
          caps: 'N',
          shiftCaps: 'n',
        },
      },
      {
        key: 'KeyM',
        rus: {
          caseDown: 'ь',
          caseUp: 'Ь',
          caps: 'Ь',
          shiftCaps: 'ь',
        },
        eng: {
          caseDown: 'm',
          caseUp: 'M',
          caps: 'M',
          shiftCaps: 'm',
        },
      },
      {
        key: 'Comma',
        rus: {
          caseDown: 'б',
          caseUp: 'Б',
          caps: 'Б',
          shiftCaps: 'б',
        },
        eng: {
          caseDown: ',',
          caseUp: '<',
          caps: ',',
          shiftCaps: '<',
        },
      },
      {
        key: 'Period',
        rus: {
          caseDown: 'ю',
          caseUp: 'Ю',
          caps: 'Ю',
          shiftCaps: 'ю',
        },
        eng: {
          caseDown: '.',
          caseUp: '>',
          caps: '.',
          shiftCaps: '>',
        },
      },
      {
        key: 'Slash',
        rus: {
          caseDown: '.',
          caseUp: ',',
          caps: '.',
          shiftCaps: ',',
        },
        eng: {
          caseDown: '/',
          caseUp: '?',
          caps: '/',
          shiftCaps: '?',
        },
      },
      {
        key: 'ArrowUp',
        rus: {
          caseDown: '▲',
          caseUp: '▲',
          caps: '▲',
          shiftCaps: '▲',
        },
        eng: {
          caseDown: '▲',
          caseUp: '▲',
          caps: '▲',
          shiftCaps: '▲',
        },
      },
      {
        key: 'ShiftRight',
        rus: {
          caseDown: 'Shift',
          caseUp: 'Shift',
          caps: 'Shift',
          shiftCaps: 'Shift',
        },
        eng: {
          caseDown: 'Shift',
          caseUp: 'Shift',
          caps: 'Shift',
          shiftCaps: 'Shift',
        },
      },
    ];
    const fifthRowKeys = [
      {
        key: 'ControlLeft',
        rus: {
          caseDown: 'Ctrl',
          caseUp: 'Ctrl',
          caps: 'Ctrl',
          shiftCaps: 'Ctrl',
        },
        eng: {
          caseDown: 'Ctrl',
          caseUp: 'Ctrl',
          caps: 'Ctrl',
          shiftCaps: 'Ctrl',
        },
      },
      {
        key: 'MetaLeft',
        rus: {
          caseDown: 'Win',
          caseUp: 'Win',
          caps: 'Win',
          shiftCaps: 'Win',
        },
        eng: {
          caseDown: 'Win',
          caseUp: 'Win',
          caps: 'Win',
          shiftCaps: 'Win',
        },
      },
      {
        key: 'AltLeft',
        rus: {
          caseDown: 'Alt',
          caseUp: 'Alt',
          caps: 'Alt',
          shiftCaps: 'Alt',
        },
        eng: {
          caseDown: 'Alt',
          caseUp: 'Alt',
          caps: 'Alt',
          shiftCaps: 'Alt',
        },
      },
      {
        key: 'Space',
        rus: {
          caseDown: ' ',
          caseUp: ' ',
          caps: ' ',
          shiftCaps: ' ',
        },
        eng: {
          caseDown: ' ',
          caseUp: ' ',
          caps: ' ',
          shiftCaps: ' ',
        },
      },
      {
        key: 'AltRight',
        rus: {
          caseDown: 'Alt',
          caseUp: 'Alt',
          caps: 'Alt',
          shiftCaps: 'Alt',
        },
        eng: {
          caseDown: 'Alt',
          caseUp: 'Alt',
          caps: 'Alt',
          shiftCaps: 'Alt',
        },
      },
      {
        key: 'ArrowLeft',
        rus: {
          caseDown: '◄',
          caseUp: '◄',
          caps: '◄',
          shiftCaps: '◄',
        },
        eng: {
          caseDown: '◄',
          caseUp: '◄',
          caps: '◄',
          shiftCaps: '◄',
        },
      },
      {
        key: 'ArrowDown',
        rus: {
          caseDown: '▼',
          caseUp: '▼',
          caps: '▼',
          shiftCaps: '▼',
        },
        eng: {
          caseDown: '▼',
          caseUp: '▼',
          caps: '▼',
          shiftCaps: '▼',
        },
      },
      {
        key: 'ArrowRight',
        rus: {
          caseDown: '►',
          caseUp: '►',
          caps: '►',
          shiftCaps: '►',
        },
        eng: {
          caseDown: '►',
          caseUp: '►',
          caps: '►',
          shiftCaps: '►',
        },
      },
      {
        key: 'ControlRight',
        rus: {
          caseDown: 'Ctrl',
          caseUp: 'Ctrl',
          caps: 'Ctrl',
          shiftCaps: 'Ctrl',
        },
        eng: {
          caseDown: 'Ctrl',
          caseUp: 'Ctrl',
          caps: 'Ctrl',
          shiftCaps: 'Ctrl',
        },
      },
    ];

    function createKeyboardRow(keyArray) {
      function createKeyboardKey(key) {
        const lang = localStorage.getItem('lang') == null
          ? 'rus'
          : localStorage.getItem('lang');

        const divKeyboardKey = createDiv(['keyboard-key', key.key]);

        const spanRus = createSpan(['rus']);
        const caseDownSpanRus = createSpan(['caseDown'], key.rus.caseDown);
        const caseUpSpanRus = createSpan(['caseUp', 'hidden'], key.rus.caseUp);
        const capsSpanRus = createSpan(['caps', 'hidden'], key.rus.caps);
        const shiftCapsSpanRus = createSpan(
          ['shiftCaps', 'hidden'],
          key.rus.shiftCaps,
        );

        if (lang !== 'rus') {
          spanRus.classList.add('hidden');
          caseDownSpanRus.classList.add('hidden');
        }

        spanRus.append(caseDownSpanRus);
        spanRus.append(caseUpSpanRus);
        spanRus.append(capsSpanRus);
        spanRus.append(shiftCapsSpanRus);

        const spanEng = createSpan(['eng']);
        const caseDownSpanEng = createSpan(['caseDown'], key.eng.caseDown);
        const caseUpSpanEng = createSpan(['caseUp', 'hidden'], key.eng.caseUp);
        const capsSpanEng = createSpan(['caps', 'hidden'], key.eng.caps);
        const shiftCapsSpanEng = createSpan(
          ['shiftCaps', 'hidden'],
          key.eng.shiftCaps,
        );

        if (lang !== 'eng') {
          spanEng.classList.add('hidden');
          caseDownSpanEng.classList.add('hidden');
        }

        spanEng.append(caseDownSpanEng);
        spanEng.append(caseUpSpanEng);
        spanEng.append(capsSpanEng);
        spanEng.append(shiftCapsSpanEng);

        divKeyboardKey.append(spanRus);
        divKeyboardKey.append(spanEng);

        return divKeyboardKey;
      }

      const divKeyboardRow = createDiv(['keyboard-row']);

      for (let index = 0; index < keyArray.length; index += 1) {
        const key = createKeyboardKey(keyArray[index]);
        divKeyboardRow.append(key);
      }

      return divKeyboardRow;
    }

    const keyboard = createDiv(['keyboard']);
    keyboard.id = 'keyboard';

    const firstRow = createKeyboardRow(firstRowKeys);
    const secondRow = createKeyboardRow(secondRowKeys);
    const thirdRow = createKeyboardRow(thirdRowKeys);
    const fourthRow = createKeyboardRow(fourthRowKeys);
    const fifthRow = createKeyboardRow(fifthRowKeys);

    keyboard.append(firstRow);
    keyboard.append(secondRow);
    keyboard.append(thirdRow);
    keyboard.append(fourthRow);
    keyboard.append(fifthRow);

    return keyboard;
  }

  const divContent = createDiv(['content']);
  const pTitle = createElement('p', ['title'], 'RSS Виртуальная клавиатура');
  const txtarea = createElement('textarea', ['textarea']);
  txtarea.name = 'textarea';
  txtarea.id = 'textarea';
  txtarea.cols = '50';
  txtarea.rows = '10';

  const keyboard = createKeyboard();
  const pDescription = createElement(
    'p',
    ['description'],
    'Клавиатура создана в ОС Windows',
  );
  const pLanguage = createElement(
    'p',
    ['language'],
    'Для переключения языка комбинация: левыe ctrl + alt',
  );

  divContent.append(pTitle);
  divContent.append(txtarea);
  divContent.append(keyboard);
  divContent.append(pDescription);
  divContent.append(pLanguage);

  document.body.append(divContent);
}

function insertTextToTextarea(el, addText) {
  if (el.qselectionStart === el.selectionEnd) {
    el.setRangeText(addText, el.selectionStart, el.selectionEnd, 'end');
  } else {
    el.setRangeText(addText, el.selectionStart, el.selectionEnd, 'end');
  }
}

function deleteClick(textElement) {
  function getCaret(el) {
    if (el.selectionStart) {
      if (el.selectionStart === el.selectionEnd) {
        el.setRangeText('', el.selectionStart, el.selectionEnd + 1, 'start');
      } else {
        el.setRangeText('', el.selectionStart, el.selectionEnd, 'start');
      }
    } else if (document.selection) {
      el.focus();
    }
  }

  getCaret(textElement);
}

function backspaceClick(textElement) {
  function getCaret(el) {
    if (el.selectionStart) {
      if (el.selectionStart === el.selectionEnd) {
        el.setRangeText('', el.selectionStart - 1, el.selectionEnd, 'start');
      } else {
        el.setRangeText('', el.selectionStart, el.selectionEnd, 'start');
      }
    } else if (document.selection) {
      el.focus();
    }
  }

  getCaret(textElement);
}

function isActiveCapsLock() {
  return document.querySelector('div.CapsLock').classList.contains('active');
}

function isActiveShift() {
  return (
    document.querySelector('div.ShiftLeft').classList.contains('active')
    || document.querySelector('div.ShiftRight').classList.contains('active')
  );
}

function isEnglish() {
  const key = document.querySelector('.keyboard .keyboard-key');
  return !key.querySelector('span.eng').classList.contains('hidden');
}

function getActiveLanguageSpans() {
  return isEnglish()
    ? document.querySelectorAll('span.eng')
    : document.querySelectorAll('span.rus');
}

function getActiveState() {
  const activeLanguageSpan = getActiveLanguageSpans()[0];

  const caseDownSpan = activeLanguageSpan
    .querySelector('span.caseDown')
    .classList.contains('hidden')
    ? undefined
    : symbolStatesEnum.caseDown;
  const caseUpSpan = activeLanguageSpan
    .querySelector('span.caseUp')
    .classList.contains('hidden')
    ? undefined
    : symbolStatesEnum.caseUp;
  const capsSpan = activeLanguageSpan
    .querySelector('span.caps')
    .classList.contains('hidden')
    ? undefined
    : symbolStatesEnum.caps;
  const shiftCapsSpan = activeLanguageSpan
    .querySelector('span.shiftCaps')
    .classList.contains('hidden')
    ? undefined
    : symbolStatesEnum.shiftCaps;

  if (caseDownSpan !== undefined) {
    return caseDownSpan;
  }
  if (caseUpSpan !== undefined) {
    return caseUpSpan;
  }
  if (capsSpan !== undefined) {
    return capsSpan;
  }
  if (shiftCapsSpan !== undefined) {
    return shiftCapsSpan;
  }

  return undefined;
}

function changeSymbolStateTo(symbolState) {
  const currentState = getActiveState();

  if (JSON.stringify(currentState) === JSON.stringify(symbolState)) {
    return;
  }

  const activeSpans = getActiveLanguageSpans();

  activeSpans.forEach((langSpan) => {
    langSpan.querySelector(currentState.selector).classList.add('hidden');
    langSpan
      .querySelector(symbolState.selector)
      .classList.remove('hidden');
  });
}


function capsLockActivate() {
  if (isActiveShift()) {
    changeSymbolStateTo(symbolStatesEnum.shiftCaps);
  } else {
    changeSymbolStateTo(symbolStatesEnum.caps);
  }
}

function capsLockDeactivate() {
  if (isActiveShift()) {
    changeSymbolStateTo(symbolStatesEnum.caseUp);
  } else {
    changeSymbolStateTo(symbolStatesEnum.caseDown);
  }
}

function shiftActivate() {
  if (isActiveCapsLock()) {
    changeSymbolStateTo(symbolStatesEnum.shiftCaps);
  } else {
    changeSymbolStateTo(symbolStatesEnum.caseUp);
  }
}

function shiftDeactivate() {
  if (isActiveCapsLock()) {
    changeSymbolStateTo(symbolStatesEnum.caps);
  } else {
    changeSymbolStateTo(symbolStatesEnum.caseDown);
  }
}

function getAllActiveAndInactiveLanguageSpans() {
  function getInactiveLanguageSpans() {
    return isEnglish()
      ? document.querySelectorAll('span.rus')
      : document.querySelectorAll('span.eng');
  }

  const activeSpans = getActiveLanguageSpans();
  const inactiveSpan = getInactiveLanguageSpans();

  return { activeSpans, inactiveSpan };
}

function changeLanguage() {
  const allLangSpans = getAllActiveAndInactiveLanguageSpans();
  const symbolState = getActiveState();

  allLangSpans.activeSpans.forEach((item) => {
    item.classList.add('hidden');
    item.querySelector(symbolState.selector).classList.add('hidden');
  });

  allLangSpans.inactiveSpan.forEach((item) => {
    item.classList.remove('hidden');
    item.querySelector(symbolState.selector).classList.remove('hidden');
  });

  if (isEnglish()) {
    localStorage.setItem('lang', 'eng');
  } else {
    localStorage.setItem('lang', 'rus');
  }
}

createDOM();

const keyboard = document.getElementById('keyboard');
const textarea = document.getElementById('textarea');

textarea.addEventListener('keydown', (e) => {
  e.preventDefault();
});

keyboard.addEventListener('mousedown', (e) => {
  const { target } = e;
  const keyboardButton = target.closest('.keyboard-key');

  if (keyboardButton !== null) {
    if (!keyboardButton.classList.contains('CapsLock')) {
      keyboardButton.classList.add('active');
    }

    if (keyboardButton.innerText === 'Shift') {
      shiftActivate();
    } else if (keyboardButton.classList.contains('CapsLock')) {
      if (isActiveCapsLock()) {
        keyboardButton.classList.remove('active');
        capsLockDeactivate();
      } else {
        keyboardButton.classList.add('active');
        capsLockActivate();
      }
    } else if (keyboardButton.classList.contains('Enter')) {
      insertTextToTextarea(textarea, '\n');
    } else if (keyboardButton.classList.contains('Tab')) {
      insertTextToTextarea(textarea, '\t');
    } else if (keyboardButton.classList.contains('Backspace')) {
      backspaceClick(textarea);
    } else if (keyboardButton.classList.contains('Delete')) {
      deleteClick(textarea);
    } else if (keyboardButton.classList.contains('Space')) {
      insertTextToTextarea(textarea, ' ');
    } else if (keyboardButton.innerText === 'Ctrl' || keyboardButton.innerText === 'Alt' || keyboardButton.innerText === 'Win') {
      // EMPTY
    } else {
      insertTextToTextarea(textarea, keyboardButton.innerText);
    }
  }
});

keyboard.addEventListener('mouseup', (e) => {
  const { target } = e;
  const keyboardButton = target.closest('.keyboard-key');

  if (keyboardButton !== null && !keyboardButton.classList.contains('CapsLock')) {
    keyboardButton.classList.remove('active');

    if (keyboardButton.innerText === 'Shift') {
      shiftDeactivate();
    }
  }
});

keyboard.addEventListener('mouseout', (e) => {
  const { target } = e;
  const keyboardButton = target.closest('.keyboard-key');

  if (keyboardButton !== null && !keyboardButton.classList.contains('CapsLock') && keyboardButton.innerText !== 'Shift') {
    keyboardButton.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  const key = document.querySelector(`.keyboard .keyboard-key.${e.code}`);
  const isKeyExist = !!key;

  if (isKeyExist) {
    if (e.ctrlKey && e.altKey) {
      changeLanguage();
    }

    if (e.code !== 'CapsLock') {
      key.classList.add('active');
    }

    if (e.key === 'Shift') {
      shiftActivate();
    } else if (e.code === 'CapsLock') {
      if (isActiveCapsLock()) {
        key.classList.remove('active');
        capsLockDeactivate();
      } else {
        key.classList.add('active');
        capsLockActivate();
      }
    } else if (e.code === 'Enter') {
      insertTextToTextarea(textarea, '\n');
    } else if (e.code === 'Tab') {
      insertTextToTextarea(textarea, '\t');
    } else if (e.code === 'Backspace') {
      backspaceClick(textarea);
    } else if (e.code === 'Delete') {
      deleteClick(textarea);
    } else if (e.code === 'Space') {
      insertTextToTextarea(textarea, e.key);
    } else if (e.key === 'Control' || e.key === 'Alt' || e.key === 'Meta') {
      textarea.focus();
    } else {
      insertTextToTextarea(textarea, key.innerText);
    }
  }
});

document.addEventListener('keyup', (e) => {
  const key = document.querySelector(
    `.keyboard .keyboard-key.active.${e.code}`,
  );

  if (key !== undefined && e.code !== 'CapsLock') {
    key.classList.remove('active');

    if (e.key === 'Shift') {
      shiftDeactivate();
    }
  }
});
