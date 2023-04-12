'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(args) {
    if (args === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += args;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
