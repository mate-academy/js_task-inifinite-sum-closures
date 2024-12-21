'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0; // Clear the sum

      return result;
    }

    sum += num;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
