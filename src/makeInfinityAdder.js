'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accumulator = 0;

  function adder(x) {
    if (x === undefined) {
      const adderSum = accumulator;

      accumulator = 0;

      return adderSum;
    }

    accumulator += x;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
