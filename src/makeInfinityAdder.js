'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return (firstNumber) => {
    let sum = firstNumber;

    if (firstNumber === undefined) {
      sum = 0;

      return sum;
    }

    return function add(nextNumber) {
      if (nextNumber === undefined) {
        return sum;
      }
      sum += nextNumber;

      return add;
    };
  };
}

module.exports = makeInfinityAdder;
