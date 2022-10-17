const { NotImplementedError } = require('../extensions/index.js');

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


class VigenereCipheringMachine {

  constructor(value) {
    this.value = true;
    if (value === false) {
      this.value = false
    }
  }

  encrypt(currentMessage, key) {
    if (currentMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let resultString = "";
    let counter = 0;

    for (let i = 0; i < currentMessage.length; i++) {
      let letter = currentMessage[i].toUpperCase();

      if (letter.charCodeAt > 64 && letter.charCodeAt() < 91) {
        let first = (letter.charCodeAt() - 65);
        let second = (key[counter % key.length].toUpperCase().charCodeAt() - 65);
        let currentLetter = (first + second) % 26;

        resultString += String.fromCharCode(currentLetter + 65);
        counter++;
      } else {
        resultString += letter;
      }
    }
    if (this.value) {
      return resultString;
    } else {
      return resultString.split("").reverse().join("");
    }
  }

  decrypt(resultString, key) {
    if (!resultString || !key) {
      throw new Error("Incorrect arguments!");
    }

    let resultMessage = "";
    let counter = 0;

    for (let i = 0; i < resultString.length; i++) {
      let currentEncLetter = resultString[i];
      if (currentEncLetter.charCodeAt() > 64 && currentEncLetter.charCodeAt() < 91) {
        let first = (currentEncLetter.charCodeAt() - 65);
        let second = (key[counter % key.length].toUpperCase().charCodeAt() - 65);
        let letter = (first - second + 26) % 26;

        resultMessage += String.fromCharCode(letter + 65);
        counter++;

      } else {
        resultMessage += currentEncLetter;
      }
    }
    if (this.value === true) {
      return resultMessage;
    } else {
      return resultMessage.split('').reverse().join('');
    }
  }
}


module.exports = {
  VigenereCipheringMachine
};
