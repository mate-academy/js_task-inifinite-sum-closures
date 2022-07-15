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
    }

    if (!numberSecond) {
      const res = sum;

      sum = 0;

      return res;
    }

    return sum;
  }

  return next;
}

module.exports = makeInfinityAdder;
