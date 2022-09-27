'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = x => {
    if (x !== undefined) {
      sum += x;

      return adder;
    }

    const currentSum = sum;

    sum = 0;

    return currentSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
