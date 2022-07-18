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
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  }

  return next;
}

module.exports = makeInfinityAdder;
