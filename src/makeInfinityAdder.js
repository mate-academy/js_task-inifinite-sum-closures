'use strict';

function makeInfinityAdder() {
  let sum = 0;

  const adder = (x) => {
    if (x === undefined) {
      const OldSum = sum;

      sum = 0;

      return OldSum;
    }

    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
