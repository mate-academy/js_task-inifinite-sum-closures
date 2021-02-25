'use strict';

function makeInfinityAdder() {
  let sum = 0;

  function adder(number) {
    if (number) {
      sum += number;

      return adder;
    } else {
      const currentResult = sum;

      sum = 0;

      return currentResult;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
