'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let currentSum = 0;

  const adder = (num) => {
    if (num !== undefined) {
      currentSum += num;

      return adder;
    }

    sum += currentSum;

    const RESULT = sum;

    sum = 0;
    currentSum = 0;

    return RESULT;
  };

  return adder;
}

module.exports = makeInfinityAdder;
