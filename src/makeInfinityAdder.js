'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value === undefined) {
      const returnedValue = sum;

      sum = 0;

      return returnedValue;
    } else {
      sum += value;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
