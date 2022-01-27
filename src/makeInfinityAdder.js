'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num1) => {
    if (num1 === undefined) {
      const lastSum = sum;

      sum = 0;

      return lastSum;
    }

    sum += num1;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
