'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function addNumber(number) {
    if (number === undefined) {
      const valueResult = sum;

      sum = 0;

      return valueResult;
    }

    sum += number;

    return addNumber;
  };
}

module.exports = makeInfinityAdder;
