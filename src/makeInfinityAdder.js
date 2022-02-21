'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(numberToAdd) {
    const sumToReturn = sum;

    if (numberToAdd === undefined) {
      sum = 0;

      return sumToReturn;
    }

    sum += numberToAdd;

    return adder;
  };
}

module.exports = makeInfinityAdder;
