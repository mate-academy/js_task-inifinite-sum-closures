'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = currentSum;

      currentSum = 0;

      return result;
    }

    currentSum += args.reduce((acc, val) => acc + val, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
