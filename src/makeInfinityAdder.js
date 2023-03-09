'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(...nums) {
    if (nums.length > 0) {
      sum += nums.reduce((acc, num) => acc + num);

      return adder;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };
}

module.exports = makeInfinityAdder;
