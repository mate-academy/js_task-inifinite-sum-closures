'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number === undefined) {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }

    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
