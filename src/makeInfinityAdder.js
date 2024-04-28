'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (nextNumber) => {
    if (!nextNumber && nextNumber !== 0) {
      const copySum = sum;

      sum = 0;

      return copySum;
    }

    sum += nextNumber;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
