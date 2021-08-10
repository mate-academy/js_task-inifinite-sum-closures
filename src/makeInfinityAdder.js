'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const adder = (value) => {
    if (value === undefined) {
      const resultSum = currentSum;

      currentSum = 0;

      return resultSum;
    }

    currentSum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
