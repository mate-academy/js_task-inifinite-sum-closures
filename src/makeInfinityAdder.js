'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (arguments.length < 1) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += number;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
