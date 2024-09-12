'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (firstNumber) => {
    if (firstNumber === undefined) {
      return sum;
    }

    sum += firstNumber;

    const nextAdder = (nextNumber) => {
      if (nextNumber === undefined) {
        const currentSum = sum;

        sum = 0;

        return currentSum;
      }

      sum += nextNumber;

      return nextAdder;
    };

    return nextAdder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
