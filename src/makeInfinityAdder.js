'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (number === undefined) {
      const totalSum = sum;

      sum = 0;

      return totalSum;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
