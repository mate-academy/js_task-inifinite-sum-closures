'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function counter(number) {
    if (number === undefined) {
      const savedSum = sum;

      sum = 0;

      return savedSum;
    }
    sum += number;

    return counter;
  };
}

module.exports = makeInfinityAdder;
