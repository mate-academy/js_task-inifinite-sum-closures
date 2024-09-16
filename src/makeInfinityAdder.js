'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;
  const adder = (number) => {
    if (number === undefined) {
      const temporarySum = totalSum;

      totalSum = 0;

      return temporarySum;
    }
    totalSum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
