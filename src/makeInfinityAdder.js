'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sumNumbers = 0;

  const adder = (number) => {
    if (number !== undefined) {
      sumNumbers += number;

      return adder;
    }

    const resultSumNumbers = sumNumbers;

    sumNumbers = 0;

    return resultSumNumbers;
  };

  return adder;
}

module.exports = makeInfinityAdder;
