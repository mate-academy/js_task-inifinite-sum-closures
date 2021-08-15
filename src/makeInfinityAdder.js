'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sumNumbers = 0;
  let counter = 0;

  const getSumNumbers = (currentNumber) => {
    if (currentNumber === undefined) {
      counter++;
    }

    if (counter === 2) {
      sumNumbers = 0;

      return sumNumbers;
    } else if (counter === 1) {
      return sumNumbers;
    }

    sumNumbers += currentNumber;

    return (nextNumber) => {
      return getSumNumbers(nextNumber);
    };
  };

  return getSumNumbers;
}

module.exports = makeInfinityAdder;
