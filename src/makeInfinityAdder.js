'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(firstValue = 0) {
  let sumOfOperations = firstValue;

  return function adder(lastValue) {
    if (lastValue) {
      sumOfOperations += lastValue;

      return adder;
    }

    const resultOfOperations = sumOfOperations;

    sumOfOperations = 0;

    return resultOfOperations;
  };
}

module.exports = makeInfinityAdder;
