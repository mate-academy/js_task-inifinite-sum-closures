'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfNumbers = 0;

  const adder = (value) => {
    if (value !== undefined) {
      sumOfNumbers += value;

      return adder;
    }

    const tempSum = sumOfNumbers;

    sumOfNumbers = 0;

    return tempSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
