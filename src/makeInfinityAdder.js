'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  function adder(...nums) {
    if (!nums.length) {
      const result = total;

      total = 0;

      return result;
    }

    for (const num of nums) {
      total += num;
    }

    return adder;
  }

  return adder;
}
module.exports = makeInfinityAdder;
