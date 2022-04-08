'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (addedNumber) => {
    if (addedNumber !== undefined) {
      sum += addedNumber;

      return adder;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
