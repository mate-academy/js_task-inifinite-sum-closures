'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function adder(x) {
    const result = sum;

    if (x === undefined) {
      sum = 0;

      return result;
    }

    sum += x;

    return adder;
  };
}

module.exports = makeInfinityAdder;
