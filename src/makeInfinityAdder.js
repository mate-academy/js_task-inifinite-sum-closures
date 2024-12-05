'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number === undefined) {
      const reset = sum;

      sum = 0;

      return reset;
    }
    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
