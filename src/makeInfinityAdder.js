'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (numberToAdd) => {
    if (typeof numberToAdd === 'undefined') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += numberToAdd;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
