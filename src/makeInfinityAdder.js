'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = function(...args) {
    if (args.length === 0) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += args.reduce((total, current) => total + current, 0);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
