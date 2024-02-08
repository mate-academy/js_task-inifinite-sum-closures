'use strict';

function makeInfinityAdder() {
  let sum = 0;

  const adder = function makeAdder(value) {
    if (value === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += value;
    }

    return makeAdder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
