'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sumValue = 0;

  function sum(value) {
    if (value === undefined) {
      const result = sumValue;

      sumValue = 0;

      return result;
    }

    sumValue = sumValue + value;

    return sum;
  }

  return sum;
}

module.exports = makeInfinityAdder;
