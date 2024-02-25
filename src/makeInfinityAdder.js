'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(...args) {
    if (args.length === 0) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    } else {
      sum += args.reduce((acc, num) => acc + num, 0);

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
