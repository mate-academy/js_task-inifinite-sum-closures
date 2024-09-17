'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = number => {
    if (number === undefined) {
      const displaySum = sum;

      sum = 0;

      return displaySum;
    }
    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
