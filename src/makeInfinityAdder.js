'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function adder(add = false) {
    sum += add;

    if (add === false) {
      const result = sum;

      sum = 0;

      return result;
    }

    return adder;
  };
}

module.exports = makeInfinityAdder;
