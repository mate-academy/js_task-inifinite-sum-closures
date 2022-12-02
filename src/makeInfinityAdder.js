'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let tempSum = 0;
  let sum;

  return function add(n) {
    if (isNaN(n)) {
      sum = tempSum;
      tempSum = 0;

      return sum;
    }

    tempSum += n;

    return add;
  };
}

module.exports = makeInfinityAdder;
