'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let SUM = 0;

  function newNumber(number) {
    if (!isNaN(number)) {
      SUM += number;

      return newNumber;
    } else {
      const result = SUM;

      SUM = 0;

      return result;
    }
  }

  return newNumber;
}

module.exports = makeInfinityAdder;
