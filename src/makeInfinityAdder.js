'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function sumsumsum(number = 0) {
    const tempSum = sum;

    if (!number) {
      sum = 0;

      return tempSum;
    }
    sum += number;

    return (secondNumber) => {
      return sumsumsum(secondNumber);
    };
  };
}

module.exports = makeInfinityAdder;
