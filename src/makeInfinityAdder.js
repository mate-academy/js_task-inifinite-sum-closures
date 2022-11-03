'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num = null) => {
    if (num === null) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
