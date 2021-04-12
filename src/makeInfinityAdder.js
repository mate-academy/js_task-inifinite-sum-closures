'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let currentSum;

  const adder = (x) => {
    if (x === undefined) {
      currentSum = sum;
      sum = 0;

      return currentSum;
    }

    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
