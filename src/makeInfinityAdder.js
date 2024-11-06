'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function adder(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += num;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
