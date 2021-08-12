'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (x) => {
    if (x === undefined) {
      const saveSum = sum;

      sum = 0;

      return saveSum;
    }

    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
