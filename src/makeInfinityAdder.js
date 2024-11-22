'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let currentSum = 0;

  const adder = function (...args) {
    if (args.length === 0) {
      const result = currentSum;

      currentSum = 0;

      return result;
    } else {
      for (const arg of args) {
        currentSum += arg;
      }

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
