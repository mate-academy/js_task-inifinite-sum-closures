'use strict';

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num || num === 0) {
      sum += num;
    } else {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
