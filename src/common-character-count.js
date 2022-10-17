const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(string1, string2) {
  let counter = 0;
  let currentLength = Math.min(string1.length, string2.length);
  for (let i = 0; i < currentLength; i++) {
    if (string2.includes(string1[i])) {
      string2 = string2.replace(string1[i], "");
      counter++;
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
