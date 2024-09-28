'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function adder(number) {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += number;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
