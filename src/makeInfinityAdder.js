'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (toAdd) => {
    if (toAdd === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += toAdd;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
