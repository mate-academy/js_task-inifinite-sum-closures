'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(value = 0) {
  // write code here
  let sum = value;

  const adder = (number) => {
    const currentSum = sum;

    if (number === undefined) {
      sum = 0;

      return currentSum;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
