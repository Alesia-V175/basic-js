const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const currentArr = arr.slice(0);
  let res = [];
  const obj = {
    "double-next": "--double-next",
    "double-prev": "--double-prev",
    "delete-prev": "--discard-prev",
    "delete-next": "--discard-next"
  }

  for (let i = 0; i < currentArr.length; i++) {
     if (currentArr[i] === obj["double-next"]) {
       if (currentArr[i + 1]) res.push(currentArr[i+1]);
    } else if (currentArr[i] === obj["double-prev"]) {
       if (currentArr[i - 1]) res.push(currentArr[i-1]);
    } else if (currentArr[i] === obj["delete-prev"]) {
       if (currentArr[i - 1]) res.pop(currentArr[i-1]);
    } else if (currentArr[i] === obj["delete-next"]) {
      i++;
      i++;
    } else {
      res.push(currentArr[i]);
    }
  }

  return res;
}

module.exports = {
  transform
};
