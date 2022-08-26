'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = number => {
    if (number !== undefined) {
      sum += number;

      return adder;
    }

    const totalSum = sum;

    sum = 0;

    return totalSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
