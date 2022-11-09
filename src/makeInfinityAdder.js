'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (number === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
