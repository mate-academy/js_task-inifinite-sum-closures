'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const addAnotherNumber = (...number) => {
    if (!number.length) {
      const returnSum = sum;

      sum = 0;

      return returnSum;
    }

    sum += number[0];

    return addAnotherNumber;
  };

  return addAnotherNumber;
}

module.exports = makeInfinityAdder;
