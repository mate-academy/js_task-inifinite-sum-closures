'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (...number) => {
    const returnedSum = sum;

    if (number.length === 0) {
      sum = 0;

      return returnedSum;
    }

    sum += number[0];

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
