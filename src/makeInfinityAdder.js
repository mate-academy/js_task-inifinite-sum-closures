'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 1) {
      sum += args[0];
    } else {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
