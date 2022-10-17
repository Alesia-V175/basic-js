const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} string
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  let array = [];
  let counter = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      counter++;
    } else {
      if (counter < 2) {
        array.push(string[i]);
      } else {
        array.push(counter, string[i]);
      }
      counter = 1
    }
  }

  return array.join('');
}

module.exports = {
  encodeLine
};
