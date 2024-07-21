'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (typeof a === 'undefined') {
      const returnedValue = sum;

      sum = 0;

      return returnedValue;
    }

    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
