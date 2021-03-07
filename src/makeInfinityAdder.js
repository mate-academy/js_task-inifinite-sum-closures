'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfNumbers = 0;

  return function adder(arg) {
    if (!arg) {
      const sum = sumOfNumbers;

      sumOfNumbers = 0;

      return sum;
    }
    sumOfNumbers += arg;

    return adder;
  };
}

module.exports = makeInfinityAdder;
