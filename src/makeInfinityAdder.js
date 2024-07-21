'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (numberToAdd) => {
    if (numberToAdd === undefined) {
      const returnedValue = sum;

      sum = 0;

      return returnedValue;
    }

    if (Number.isInteger(numberToAdd)) {
      sum += numberToAdd;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
