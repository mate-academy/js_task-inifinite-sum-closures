'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let calculation = 0;
  let result;

  const sumOfNumbers = nextNumber => {
    if (nextNumber !== undefined) {
      calculation += nextNumber;
    } else {
      result = calculation;
      calculation = 0;

      return result;
    }

    return sumOfNumbers;
  };

  return sumOfNumbers;
}

module.exports = makeInfinityAdder;
