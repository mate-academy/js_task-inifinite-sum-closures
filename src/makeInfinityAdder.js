'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let currentSum = 0;

  const ADDER = (num) => {
    if (num !== undefined) {
      currentSum += num;

      return ADDER;
    } else {
      sum += currentSum;

      const RESULT = sum;

      sum = 0;
      currentSum = 0;

      return RESULT;
    }
  };

  return ADDER;
}

module.exports = makeInfinityAdder;
