'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let total = 0;

  function adder(number) {
    function nextAdder(nextNumber) {
      if (nextNumber === undefined) {
        total = sum;
        sum = 0;

        return total;
      }

      sum += nextNumber;

      return nextAdder;
    }

    if (number === undefined) {
      total = sum;
      sum = 0;

      return total;
    }

    sum += number;

    return nextAdder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
