'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    const result = sum;

    if (num === undefined) {
      sum = 0;

      return result;
    } else {
      sum += num;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
