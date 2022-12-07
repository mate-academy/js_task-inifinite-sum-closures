'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (x) => {
    if (x !== undefined) {
      sum += x;

      return adder;
    }

    const finalSum = sum;

    sum = 0;

    return finalSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
