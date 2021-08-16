'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sumNumbers = 0;

  const getSumNumbers = (currentNumber) => {
    if (currentNumber === undefined) {
      const result = sumNumbers;

      sumNumbers = 0;

      return result;
    }

    sumNumbers += currentNumber;

    return getSumNumbers;
  };

  return getSumNumbers;
};

module.exports = makeInfinityAdder;
