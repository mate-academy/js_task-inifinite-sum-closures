'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function adder(x) {
    if (x === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
