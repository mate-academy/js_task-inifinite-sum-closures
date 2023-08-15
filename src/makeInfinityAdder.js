'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(args) {
    if (args === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += args;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
