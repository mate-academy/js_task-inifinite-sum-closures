'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const total = sum;

      sum = 0;

      return total;
    }

    sum += args[0];

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
