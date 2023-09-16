'use strict';

/**
 * @return {function} */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (addend) => {
    if (typeof addend === 'number') {
      sum += addend;

      return adder;
    }

    const tempSum = sum;

    sum = 0;

    return tempSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
