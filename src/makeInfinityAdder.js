'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function curried(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum = args.reduce((a, b) => a + b, sum);

    return curried;
  };
}

module.exports = makeInfinityAdder;
