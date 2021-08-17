'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const addSum = sum;

      sum = 0;

      return addSum;
    }

    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
