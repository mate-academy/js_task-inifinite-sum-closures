'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  const adder = (value) => {
    if (value === undefined) {
      const result = totalSum;

      totalSum = 0;

      return result;
    }

    totalSum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
