'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const tmpSum = sum;

      sum = 0;

      return tmpSum;
    }
    sum += +args;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
