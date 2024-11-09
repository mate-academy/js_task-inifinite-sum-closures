'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sumOfNumbers = 0;

  return function adder(number = NaN) {
    if (Number.isNaN(number)) {
      const result = sumOfNumbers;

      sumOfNumbers = 0;

      return result;
    }

    sumOfNumbers += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
