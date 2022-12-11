'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (number !== undefined) {
      sum += number;

      return adder;
    }

    const clear = sum;

    sum = 0;

    return clear;
  };

  return adder;
}

module.exports = makeInfinityAdder;
