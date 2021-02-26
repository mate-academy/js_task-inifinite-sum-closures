'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(firstValue = 0) {
  let sumOfOperations = firstValue;

  const adder = (lastValue) => {
    if (lastValue) {
      sumOfOperations += lastValue;

      return adder;
    } else {
      const resultOfOperations = sumOfOperations;

      sumOfOperations = 0;

      return resultOfOperations;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
