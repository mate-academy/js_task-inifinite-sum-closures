'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    for (const arg of args) {
      sum += arg;
    }

    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
