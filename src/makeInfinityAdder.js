'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfNumbers = 0;

  function adderNextNumber(number) {
    if (number !== undefined) {
      sumOfNumbers += number;
    } else {
      const lastNumber = sumOfNumbers;

      sumOfNumbers = 0;

      return lastNumber;
    }

    return adderNextNumber;
  }

  return adderNextNumber;
}

module.exports = makeInfinityAdder;
