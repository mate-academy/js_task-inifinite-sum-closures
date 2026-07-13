'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const calculatedSum = (number) => {
    if (number === undefined) {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }

    sum += number;

    return calculatedSum;
  };

  return calculatedSum;
}

module.exports = makeInfinityAdder;
