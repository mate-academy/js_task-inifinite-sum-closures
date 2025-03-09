'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(b) {
    if (b === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += b;

    return adder;
  };
}

module.exports = makeInfinityAdder;
