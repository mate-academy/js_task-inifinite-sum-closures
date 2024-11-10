'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  const adder = (a) => {
    if (a === undefined) {
      const result = totalSum;

      totalSum = 0;

      return result;
    }
    totalSum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
