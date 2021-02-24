'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfNumbers = 0;

  const adder = (number) => {
    if (number !== undefined) {
      sumOfNumbers += number;

      return adder;
    }

    const keepSumOfNumbers = sumOfNumbers;

    sumOfNumbers = 0;

    return keepSumOfNumbers;
  };

  return adder;
}

module.exports = makeInfinityAdder;
