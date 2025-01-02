'use strict';

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    const adderSum = sum;

    if (a === undefined) {
      sum = 0;

      return adderSum;
    }

    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
