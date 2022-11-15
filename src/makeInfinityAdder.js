'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;
  let sum = 0;

  return function ad(x) {
    if (x || x === 0) {
      sum += x;

      return ad;
    } else {
      count++;

      if (count === 1) {
        return sum;
      }

      if (count > 1) {
        sum = 0;

        return sum;
      }
    }
  };
}

module.exports = makeInfinityAdder;
