'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (Number.isInteger(num)) {
      sum += num;

      return adder;
    }

    const clear = sum;

    sum = 0;

    return clear;
  };

  return adder;
}

module.exports = makeInfinityAdder;
