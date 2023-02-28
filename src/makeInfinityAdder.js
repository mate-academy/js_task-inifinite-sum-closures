'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    if (num === undefined) {
      const res = sum;

      sum = 0;

      return res;
    } else {
      sum += num;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
