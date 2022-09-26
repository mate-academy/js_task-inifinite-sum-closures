'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let temp = 0;

  return function adder(nums) {
    if (isNaN(nums)) {
      const sum = temp;

      temp = 0;

      return sum;
    }
    temp += nums;

    return adder;
  };
}

module.exports = makeInfinityAdder;
