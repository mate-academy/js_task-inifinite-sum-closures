'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function sumsumsum(number) {
    const tempSum = sum;

    if (number === undefined) {
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
