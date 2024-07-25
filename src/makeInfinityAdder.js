'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += num;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
