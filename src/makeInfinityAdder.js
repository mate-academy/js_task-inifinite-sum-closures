'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  const nums = [];

  return function adder(arg) {
    if (arg === undefined) {
      const result = nums.reduce((sum, num) => sum + num, 0);

      nums.splice(0, nums.length);

      return result;
    } else {
      nums.push(arg);

      return adder;
    }
  };
}
module.exports = makeInfinityAdder;
