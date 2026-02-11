'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = function (...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    for (const arg of args) {
      sum += arg;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
