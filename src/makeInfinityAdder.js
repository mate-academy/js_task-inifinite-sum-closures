'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  let sumOfNumbers = 0;

  function adder(number) {
    if (arguments.length === 0) {
      const currentSum = sumOfNumbers;

      sumOfNumbers = 0;

      return currentSum;
    }

    sumOfNumbers += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
