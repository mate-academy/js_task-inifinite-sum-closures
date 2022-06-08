'use strict';

function makeInfinityAdder() {
  let totalSum = 0;

  const counter = (x) => {
    const sum = totalSum;

    if (x === undefined) {
      totalSum = 0;

      return sum;
    }

    totalSum += x;

    return counter;
  };

  return counter;
}

module.exports = makeInfinityAdder;
