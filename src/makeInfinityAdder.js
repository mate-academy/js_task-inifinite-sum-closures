'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(value) {
    if (value !== undefined) {
      sum += value;

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
