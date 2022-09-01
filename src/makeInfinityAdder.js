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

    const result = sumOfNumbers;

    sumOfNumbers = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
