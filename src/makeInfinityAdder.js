'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  const adder = number => {
    if (number === undefined) {
      const result = totalSum;

      totalSum = 0;

      return result;
    }

    totalSum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
