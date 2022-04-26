import {NotImplementedError} from '../extensions/index.js';

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

  encrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error('Incorrect arguments!');
    }
    if (!message || message.length < 1) {
      throw new Error('Incorrect arguments!');
    }
    if (!key || key.length < 1) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';

    let keyCharsCodes = [];

    message = message.toLowerCase();
    key = key.toLowerCase()

    for (let j = 0; j < key.length; j++) {
      keyCharsCodes.push((key[j].charCodeAt() - 97) % 26)
    }

    let words = message.split(' ');

    let keyCharIndex = 0;

    let cipher_i;

    for (let word = 0; word < words.length; word++) {

      for (let wordCharIndex = 0; wordCharIndex < words[word].length; wordCharIndex++) {

        let shift = keyCharsCodes[keyCharIndex % keyCharsCodes.length];

        let charCode = words[word][wordCharIndex].charCodeAt();

        if (charCode < 97 || charCode > 122) {
          result += words[word][wordCharIndex];
          continue;
        }

        cipher_i = (charCode - 97 + shift) % 26;

        result += String.fromCharCode(97 + cipher_i);

        keyCharIndex = keyCharIndex + 1;


        if (keyCharIndex > keyCharsCodes.length - 1) {
          keyCharIndex = 0;
        }
      }


      result += ' '
    }
    result = result.toUpperCase().trim()
    if (!this._direct) {
      result = result.split('').reverse().join('')
    }
    return result
  }

  decrypt(encryptedMessage, key) {

    if (arguments.length < 2) {
      throw new Error('Incorrect arguments!');
    }

    if (!encryptedMessage) {
      throw new Error('Incorrect arguments!');
    }
    if (!key) {
      throw new Error('Incorrect arguments!');
    }

    if (encryptedMessage.length < 1) {
      throw new Error('Incorrect arguments!');
    }
    if (key.length < 1) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';

    let keyCharsCodes = [];

    encryptedMessage = encryptedMessage.toLowerCase();
    key = key.toLowerCase();

    // if (!this._direct) {
    //   encryptedMessage = encryptedMessage.split('').reverse().join('')
    // }

    for (let j = 0; j < key.length; j++) {
      keyCharsCodes.push((key[j].charCodeAt() - 97) % 26)
    }

    let words = encryptedMessage.split(' ');

    let keyCharIndex = 0;

    let cipher_i;

    for (let word = 0; word < words.length; word++) {

      for (let wordCharIndex = 0; wordCharIndex < words[word].length; wordCharIndex++) {

        let shift = keyCharsCodes[keyCharIndex % keyCharsCodes.length];

        let charCode = words[word][wordCharIndex].charCodeAt();

        if (charCode < 97 || charCode > 122) {

          result += words[word][wordCharIndex];

          continue;
        }

        cipher_i = (charCode - 97 - shift) % 26;

        if (cipher_i < 0) {
          cipher_i = 26 + cipher_i;
        }

        result += String.fromCharCode(97 + cipher_i);

        keyCharIndex = keyCharIndex + 1;

        if (keyCharIndex > keyCharsCodes.length - 1) {
          keyCharIndex = 0;
        }
      }

      result += ' '
    }


    if (!this._direct) {
      result = result.split('').reverse().join('')
    }
    return result.toUpperCase().trim()
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
