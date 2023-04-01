'use strict';

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a = null) => {
    if (a === null) {
      const returnValue = sum;

      sum = 0;

      return returnValue;
    } else {
      sum += a;
    }

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
