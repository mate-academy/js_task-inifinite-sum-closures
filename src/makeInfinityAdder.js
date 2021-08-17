'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const adder = (currentValue) => {
    if (currentValue === undefined) {
      const totalSum = currentSum;

      currentSum = 0;

      return totalSum;
    }

    currentSum += currentValue;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
