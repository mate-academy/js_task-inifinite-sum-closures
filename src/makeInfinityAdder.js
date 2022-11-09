'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;
  let count = 0;

  function sum(x) {
    if (count > 0) {
      return (currentSum = 0);
    }

    if (x === undefined) {
      count++;

      return currentSum;
    } else {
      currentSum += x;

      return sum;
    }
  }

  return sum;
}

module.exports = makeInfinityAdder;
