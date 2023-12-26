'use strict';

function makeInfinityAdder() {
  let sum = 0;

  function adder(value) {
    if (value === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }

    sum += value;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
