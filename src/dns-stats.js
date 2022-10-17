const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let array = [];
  let obj = {};
  
  for (let i = 0; i < domains.length; i++) {
    array.push(domains[i].split('.').reverse());
  }
  
  for (let i = 0; i < array.length; i++) {
    let currentLength = array[i].length;
    
    for (let j = 0; j < currentLength; j++) {
      let string = "." + array[i].join('.');
      
      if (string in obj) {
        obj[string] += 1;
      } else {
        obj[string] = 1;
      }
      array[i].pop();
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
