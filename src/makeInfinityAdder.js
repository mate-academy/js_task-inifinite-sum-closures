'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    const sumMemory = sum;

    if (number) {
      sum += number;

      return adder;
    }
    sum = 0;

    return sumMemory;
  };

  return adder;
}

module.exports = makeInfinityAdder;
