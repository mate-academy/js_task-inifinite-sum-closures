'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (args) => {
    if (args === undefined) {
      const newSum = sum;

      sum = 0;

      return newSum;
    }

    sum += args;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
