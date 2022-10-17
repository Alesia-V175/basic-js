const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const string = number.toString();
  let max = 0;
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    let currentStr = string.slice(0, i) + string.slice(i + 1);
    counter = +currentStr;
    max = Math.max(max, counter);
  }
  return max;
}

module.exports = {
  deleteDigit
};
