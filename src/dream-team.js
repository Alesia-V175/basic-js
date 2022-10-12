const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (Array.isArray(arr) === false) {
    return false;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      let letter = arr[i].trim().slice(0, 1).toUpperCase();
      result.push(letter);
    }
  }
  result = result.sort(function (a, b) {
    return ('' + a).localeCompare(b);
  })

  return result.join("");
}
module.exports = {
  createDreamTeam
};
