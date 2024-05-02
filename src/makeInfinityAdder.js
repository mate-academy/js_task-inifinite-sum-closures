'use strict';

function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    } else {
      sum += args.reduce((a, b) => a + b, 0);

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
