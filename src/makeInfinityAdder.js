'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (digit) => {
    if (digit === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += digit;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
