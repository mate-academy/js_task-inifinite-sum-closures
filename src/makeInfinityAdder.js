'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function firstFunction(firstNumber) {
    let sum = 0;

    if (firstNumber === undefined) {
      return sum;
    } else {
      sum = firstNumber;

      return function nextFunction(nextNumber) {
        if (nextNumber === undefined) {
          return sum;
        } else {
          sum += nextNumber;

          return nextFunction;
        }
      };
    }
  };
}

module.exports = makeInfinityAdder;
