'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (number) => {
    if (number) {
      sum += number;

      return adder;
    } else {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
