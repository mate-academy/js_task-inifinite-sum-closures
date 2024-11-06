'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (num === undefined) {
      const result = sum;

      sum = 0; // reset sum after returning the result

      return result;
    } else {
      sum += num;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;