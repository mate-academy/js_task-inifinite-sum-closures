'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let currentNumber;
  let currentResult;

  const adder = (x) => {
    if (x === undefined) {
      currentResult = result;
      result = 0;

      return currentResult;
    }

    currentNumber = x;
    result += currentNumber;

    const summ = (y) => {
      if (y === undefined) {
        currentResult = result;
        result = 0;

        return currentResult;
      }

      currentNumber = y;
      result += currentNumber;

      return summ;
    };

    return summ;
  };

  return adder;
}

module.exports = makeInfinityAdder;
