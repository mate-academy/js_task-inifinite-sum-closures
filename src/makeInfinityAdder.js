'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function adder(...nums) {
    if (nums.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      for (const num of nums) {
        sum += num;
      }

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
