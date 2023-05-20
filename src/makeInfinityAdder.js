'use strict';

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (typeof num === 'number') {
      sum += num;

      return adder;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
