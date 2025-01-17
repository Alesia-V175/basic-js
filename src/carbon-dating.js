const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(stringNum) {
  if (typeof stringNum !== "string") {
    return false;
  }
  const num = Number(stringNum);
  if (!!!num || num < 0 || num > 15) {
    return false;
  }

  const res = Math.log(MODERN_ACTIVITY / num) / (Math.log(2) / HALF_LIFE_PERIOD);
  return  Math.ceil(res);
}

module.exports = {
  dateSample
};
