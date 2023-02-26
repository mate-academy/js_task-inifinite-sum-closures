'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function adder(number) {
    if (number !== undefined) {
      sum += number;

      return adder;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
