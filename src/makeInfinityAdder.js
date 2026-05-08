'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  const adder = (value) => {
    if (value !== undefined) {
      totalSum += value;

      return adder;
    }

    const finalResult = totalSum;

    totalSum = 0;

    return finalResult;
  };

  return adder;
}

module.exports = makeInfinityAdder;
