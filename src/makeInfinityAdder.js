'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num !== undefined) {
      sum += num;

      return adder;
    } else {
      const tempSum = sum;

      sum = 0;

      return tempSum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
