'use strict';

function makeInfinityAdder() {
  let sum = 0;

  return function add(number) {
    if (arguments.length === 0) {
      const returnSum = sum;

      sum = 0;

      return returnSum;
    }

    sum += number;

    return add;
  };
}

module.exports = makeInfinityAdder;
