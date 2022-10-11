const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  // throw new NotImplementedError('Not implemented');
  const arr = array;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let arrFirst = arr[i];
    for (let j = 0; j < arrFirst.length;  j++) {
      if (arrFirst[j] === "^^") {
        result ++;
      }
    }
  }
  return result;
}

module.exports = {
  countCats
};
