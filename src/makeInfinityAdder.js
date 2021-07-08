'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let allNumbersSum = 0;

  return function hellAccountants(number) {
    if (number !== undefined) {
      allNumbersSum += number;

      return hellAccountants;
    }

    const sum = allNumbersSum;

    allNumbersSum = 0;

    return sum;
  };
}

module.exports = makeInfinityAdder;
