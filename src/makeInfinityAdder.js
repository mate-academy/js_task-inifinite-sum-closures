'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (b) => {
    if (b === undefined) {
      const getSum = sum;

      sum = 0;

      return getSum;
    }

    sum += b;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
