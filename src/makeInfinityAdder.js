'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function InputOperator(number) {
    if (number) {
      sum += number;

      return InputOperator;
    } else {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }
  };
}

module.exports = makeInfinityAdder;
