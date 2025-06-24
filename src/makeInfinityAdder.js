'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(...nums) {
    if (nums.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += nums.reduce((acc, val) => acc + val, 0);

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
