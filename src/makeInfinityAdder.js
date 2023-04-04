'use strict';

function makeInfinityAdder() {
  let sum = 0;

  const adder = (x) => {
    if (x === undefined) {
      const oldSum = sum;

      sum = 0;

      return oldSum;
    }

    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
