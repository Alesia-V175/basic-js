const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */



class DepthCalculator {
  calculateDepth(array) {
    if (Array.isArray(array)) {
      let maxChildDepth = 1;
      maxChildDepth += array.reduce((maxDepth, item) => {
        let currentDepth = 0;
        if (Array.isArray(item) === true) {
          currentDepth = this.calculateDepth(item);
        }
        if (maxDepth < currentDepth) {
          return currentDepth;
        }
        return maxDepth;
      }, 0)
      return maxChildDepth;
    }
  }
}

module.exports = {
  DepthCalculator
};
