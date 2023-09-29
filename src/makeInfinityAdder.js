'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  const adder = (a) => {
    if (a === undefined) {
      const sumToReturn = totalSum;

      totalSum = 0;

      return sumToReturn;
    }

    totalSum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
