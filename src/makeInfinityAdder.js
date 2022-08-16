'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfNumbers = 0;

  return function adder(number) {
    if (number !== undefined) {
      sumOfNumbers += number;

      return adder;
    }

    const result = sumOfNumbers;

    sumOfNumbers = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
