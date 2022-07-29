'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  const adder = (...args) => {
    while (args.length !== 0) {
      totalSum += args[0];

      return adder;
    };

    const currentSum = totalSum;

    totalSum = 0;

    return currentSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
