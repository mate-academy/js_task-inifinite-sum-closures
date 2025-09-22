'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(number) {
  let sum = number || 0;

  function adder(x) {
    if (x === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += x;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
