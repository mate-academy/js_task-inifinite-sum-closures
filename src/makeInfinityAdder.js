'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  const adder = (num) => {
    if (isNaN(+num)) {
      const sum = totalSum;

      totalSum = 0;

      return sum;
    }

    totalSum += +num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
