'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(value) {
    if (arguments.length === 0) {
      return sum;
    }

    sum += value;

    function innerAdder(nextValue) {
      if (arguments.length === 0) {
        const currentSum = sum;

        sum = 0;

        return currentSum;
      }
      sum += nextValue;

      return innerAdder;
    }

    return innerAdder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
