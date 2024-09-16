'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (number !== undefined) {
      sum += number;

      return adder;
    }

    const lastSum = sum;

    sum = 0;

    return lastSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
