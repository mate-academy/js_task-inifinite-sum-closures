'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sumNumbers = 0;
  let emptyCall = 0;

  const getSumNumbers = (currentNumber) => {
    if (currentNumber === undefined) {
      emptyCall++;
    }

    if (emptyCall >= 2) {
      sumNumbers = 0;

      return sumNumbers;
    } else if (emptyCall === 1) {
      return sumNumbers;
    }

    sumNumbers += currentNumber;

    return getSumNumbers;
  };

  return getSumNumbers;
};

module.exports = makeInfinityAdder;
