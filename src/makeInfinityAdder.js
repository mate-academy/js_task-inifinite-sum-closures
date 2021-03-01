'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfOperations = 0;

  return function adder(number) {
    if (number) {
      sumOfOperations += number;

      return adder;
    }

    const resultOfOperations = sumOfOperations;

    sumOfOperations = 0;

    return resultOfOperations;
  };
}

module.exports = makeInfinityAdder;
