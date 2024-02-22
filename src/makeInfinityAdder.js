'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(...nums) {
    if (nums.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += nums.reduce((acc, num) => acc + num, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
