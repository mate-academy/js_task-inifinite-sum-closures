'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const currentSum = totalSum;

      totalSum = 0;

      return currentSum;
    } else {
      for (const arg of args) {
        totalSum += arg;
      }

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
