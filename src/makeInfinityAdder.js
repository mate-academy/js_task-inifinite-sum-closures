'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (param) => {
    if (param !== undefined) {
      sum += param;

      return adder;
    }

    const copySum = sum;

    sum = 0;

    return copySum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
