const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function checkNumber(number) {
  if(!number) {
    return 1;
  } else {
    return Number(number);
  }
}

function checkString(str, defaultStr = "") {
  if(str || str === false) {
    return str;
  } else if (str === null) {
    return "null";
  } else {
    return defaultStr;
  }
}

function removeLast(str, toRemove){
  let pos = str.lastIndexOf(toRemove);
  let resArr = str.split("");
  resArr.splice(pos, toRemove.length);
  return resArr.join("");
}

function repeater(str, options) {
  if(str === null) {
    str = "null";
  }

  options.addition = checkString(options.addition, "");
  options.separator = checkString(options.separator, "+");
  options.additionSeparator = checkString(options.additionSeparator, "|");
  options.repeatTimes = checkNumber(options.repeatTimes);
  options.additionRepeatTimes = checkNumber(options.additionRepeatTimes);


  options.addition = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)
  options.addition = removeLast(options.addition, options.additionSeparator);

  let res = (str + options.addition + options.separator).repeat(options.repeatTimes);

  return removeLast(res, options.separator);
}

module.exports = {
  repeater
};
