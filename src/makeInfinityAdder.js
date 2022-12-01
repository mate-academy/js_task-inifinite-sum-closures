'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accumulator = 0;

  function adder(num) {
    if (num === undefined) {
      const sum = accumulator;

      accumulator = 0;

      return sum;
    }
    accumulator += num;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
