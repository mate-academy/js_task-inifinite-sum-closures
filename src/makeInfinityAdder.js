'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalOfNumbers = 0;

  const adder = (number) => {
    if (number === undefined) {
      const currentTotal = totalOfNumbers;

      totalOfNumbers = 0;

      return currentTotal;
    }

    totalOfNumbers += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
