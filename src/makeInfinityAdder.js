'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let totalSum = 0;

  return function adder(...nums) {
    if (nums.length === 0) {
      const result = totalSum;

      totalSum = 0;

      return result;
    }

    totalSum += nums.reduce((total, current) => total + current, 0);

    return adder;
  };
}

module.exports = makeInfinityAdder;
