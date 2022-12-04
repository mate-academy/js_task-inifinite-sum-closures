'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(n) {
    if (n === undefined) {
      const sumToReturn = sum;

      sum = 0;

      return sumToReturn;
    }

    sum += n;

    return adder;
  };
}

module.exports = makeInfinityAdder;
