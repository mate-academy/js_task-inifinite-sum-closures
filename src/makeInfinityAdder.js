'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number === undefined) {
      const total = sum;

      sum = 0;

      return total;
    }
    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
