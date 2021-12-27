'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const techSum = sum;

      sum = 0;

      return techSum;
    } else {
      sum += num;
    }

    return adder;
  };
}

module.exports = makeInfinityAdder;
