'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(numberFirst) {
  let sum = (!numberFirst) ? 0 : numberFirst;

  function next(numberSecond) {
    if (numberSecond !== undefined) {
      sum += numberSecond;

      return next;
    } else if (!numberSecond) {
      const result = sum;

      sum = 0;

      return result;
    }

    return sum;
  }

  return next;
}

module.exports = makeInfinityAdder;
