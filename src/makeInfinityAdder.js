'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    } else {
      sum += value;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
