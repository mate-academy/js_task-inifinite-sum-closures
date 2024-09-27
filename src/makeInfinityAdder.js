'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (value) => {
    if (value !== undefined) {
      sum += value;

      return adder;
    }

    const returnSum = sum;

    sum = 0;

    return returnSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
