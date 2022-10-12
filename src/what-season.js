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

  if (!!!currentDate) {
    return obj.notPassed;
  }
  if (!(currentDate instanceof Date) || currentDate.hasOwnProperty('toString')) {
    throw new Error('Invalid date!');
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
