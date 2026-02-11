'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      for (const arg of args) {
        if (typeof arg === 'undefined') {
          return sum;
        }
      }
      sum += args.reduce((acc, curr) => acc + curr, 0);

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
