'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(a) {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += a;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
