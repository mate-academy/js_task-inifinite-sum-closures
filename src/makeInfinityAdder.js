'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const sumToReturn = sum;

      sum = 0;

      return sumToReturn;
    }

    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
