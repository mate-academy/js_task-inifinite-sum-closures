'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(...args) {
    if (args.length > 0) {
      sum = args.reduce((acc, value) => acc + value, sum);

      return adder;
    }

    const currentSum = sum;

    sum = 0;

    return currentSum;
  };
}

module.exports = makeInfinityAdder;
