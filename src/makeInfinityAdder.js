'use strict';

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function adder(number) {
    if (number) {
      sum += number;

      return adder;
    }

    const currentResult = sum;

    sum = 0;

    return currentResult;
  };
}

module.exports = makeInfinityAdder;
