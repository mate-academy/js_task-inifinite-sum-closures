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

    const prevSum = sum;

    sum = 0;

    return prevSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
