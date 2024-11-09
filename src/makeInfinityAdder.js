'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(n) {
    if (n === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += n;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
