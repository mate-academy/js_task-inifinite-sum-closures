'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = (number) => {
    if (number === undefined) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
    sum += number;

    const addInner = (nextNumber) => {
      if (nextNumber === undefined) {
        const currentSum = sum;

        sum = 0;

        return currentSum;
      }
      sum += nextNumber;

      return addInner;
    };

    return addInner;
  };

  return add;
}

module.exports = makeInfinityAdder;
