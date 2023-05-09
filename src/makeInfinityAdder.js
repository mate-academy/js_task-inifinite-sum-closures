'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(...nums) {
    if (nums.length === 0) {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }

    sum += nums.reduce((total, elem) => total + elem);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
