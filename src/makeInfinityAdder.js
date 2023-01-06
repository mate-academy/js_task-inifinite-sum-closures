'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num !== 0 && !num) {
      const sums = sum;

      sum = 0;

      return sums;
    }

    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
