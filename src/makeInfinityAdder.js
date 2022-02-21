'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number === undefined) {
      const sumToReturn = sum;

      sum = 0;

      return sumToReturn;
    }

    sum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
