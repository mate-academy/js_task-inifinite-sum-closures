'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return (firstNumber) => {
    let sum = firstNumber;

    if (firstNumber === undefined) {
      return 0;
    }

    const adder = (nextNumber) => {
      if (nextNumber !== undefined) {
        sum += nextNumber;
      } else {
        return sum;
      }

      return adder;
    };

    return adder;
  };
}

module.exports = makeInfinityAdder;
