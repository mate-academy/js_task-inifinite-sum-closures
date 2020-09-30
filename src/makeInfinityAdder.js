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
    } else {
      const localSum = sum;

      sum = 0;

      return localSum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
