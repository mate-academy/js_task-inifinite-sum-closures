'use strict';

/*
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(n) {
    const totalSum = sum;

    if (n === undefined) {
      sum = 0;

      return totalSum;
    }

    sum += n;

    return adder;
  };
}

module.exports = makeInfinityAdder;
