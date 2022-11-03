'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
