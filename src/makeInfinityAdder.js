'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    const allNumbers = sum;

    if (number) {
      sum += number;

      return adder;
    }

    sum = 0;

    return allNumbers;
  };

  return adder;
}

module.exports = makeInfinityAdder;
