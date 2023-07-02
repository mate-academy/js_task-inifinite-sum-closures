'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (firstValue) => {
    if (!Number.isInteger(firstValue)) {
      const result = sum;

      sum = 0;

      return result;
    };

    sum += firstValue;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
