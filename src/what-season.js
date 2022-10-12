const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const currentDate = date;
  const obj = {
    "win": "winter",
    "spr": "spring",
    "sum": "summer",
    "aut": "autumn",
    "notPassed": 'Unable to determine the time of year!',
    "invalid": "Invalid date!",
  }

  if (currentDate === undefined) {
    return  obj.notPassed;
  } else if (isNaN(Date.parse(currentDate))) {
    return  obj.invalid;
  }

  try {
    currentDate.getTime()
  } catch (error) {
    throw new Error(obj.invalid)
  }

  const currentMonth = currentDate.getMonth();
  console.log(currentMonth);

  if ((currentMonth >= 0 && currentMonth < 2) || (currentMonth === 11)) {
    return  obj.win;
  } else if (currentMonth >= 2 && currentMonth < 5) {
    return obj.spr;
  } else if (currentMonth >= 5 && currentMonth < 8) {
    return obj.sum;
  } else if (currentMonth >= 8 && currentMonth < 11) {
    return obj.aut;
  }

}

module.exports = {
  getSeason
};
