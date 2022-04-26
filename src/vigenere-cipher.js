import {NotImplementedError} from '../extensions/index.js';

const MIN_CHAR_CODE = 97;
const MAX_CHAR_CODE = 122;

function extractKeyCharCodes(key) {
  key = key.toLowerCase()
  let keyCharsCodes = [];
  for (let j = 0; j < key.length; j++) {
    keyCharsCodes.push((key[j].charCodeAt() - MIN_CHAR_CODE) % 26)
  }
  return keyCharsCodes
}

function isValidArgs(message, key) {
  if (!message || message.length < 1) {
    return false
  }
  if (!key || key.length < 1) {
    return false
  }
  return true

}
function reverseStr(text) {
  return text.split('').reverse().join('')
}
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {

  _direct = true

  constructor(direct) {
    if (arguments.length >= 1) {
      this._direct = !!direct
    }
  }

  prepareResult(result) {
    if (!this._direct) {
      result = reverseStr(result)
    }
    return result.toUpperCase().trim()
  }

  encrypt(message, key) {
    if (arguments.length < 2 || !isValidArgs(message, key)) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';

    const keyCharsCodes = extractKeyCharCodes(key)

    let words = message.toLowerCase().split(' ');

    let keyCharIndex = 0;

    for (let word of words) {
      for (let char of word) {
        let shift = keyCharsCodes[keyCharIndex % keyCharsCodes.length];

        let charCode = char.charCodeAt();

        if (charCode < MIN_CHAR_CODE || charCode > MAX_CHAR_CODE) {
          result += char
          continue;
        }

        let cipher = (charCode - MIN_CHAR_CODE + shift) % 26;

        result += String.fromCharCode(MIN_CHAR_CODE + cipher);

        keyCharIndex = keyCharIndex + 1;

        if (keyCharIndex > keyCharsCodes.length - 1) {
          keyCharIndex = 0;
        }
      }

      result += ' '
    }

    return this.prepareResult(result)
  }

  decrypt(encryptedMessage, key) {

    if (arguments.length < 2 || !isValidArgs(encryptedMessage, key)) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';

    const keyCharsCodes = extractKeyCharCodes(key)

    let words = encryptedMessage.toLowerCase().split(' ');

    let keyCharIndex = 0;

    for (const word of words) {
      for (const char of word) {

        let shift = keyCharsCodes[keyCharIndex % keyCharsCodes.length];

        let charCode = char.charCodeAt();

        if (charCode < MIN_CHAR_CODE || charCode > MAX_CHAR_CODE) {

          result += char;

          continue;
        }

        let cipher = (charCode - MIN_CHAR_CODE - shift) % 26;

        if (cipher < 0) {
          cipher = 26 + cipher;
        }

        result += String.fromCharCode(MIN_CHAR_CODE + cipher);

        keyCharIndex = keyCharIndex + 1;

        if (keyCharIndex > keyCharsCodes.length - 1) {
          keyCharIndex = 0;
        }
      }

      result += ' '
    }

    return this.prepareResult(result)
  }
}


// const directMachine = new VigenereCipheringMachine();
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))
//
// const reverseMachine = new VigenereCipheringMachine(false);
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'))
// => '!ULLD XS XQHIEA')
// => 'AEIHQX SX DLLU!'

// const directMachine = new VigenereCipheringMachine();

// console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'))

// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))
// => 'AEIHQX SX DLLU!'
// const reverseMachine = new VigenereCipheringMachine(false);

module.exports = {
  VigenereCipheringMachine
};
