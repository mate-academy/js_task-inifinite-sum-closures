'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value === undefined) {
      const totalSum = sum;

      sum = 0;

      return totalSum;
    }

    sum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
