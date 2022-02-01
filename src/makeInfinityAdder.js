'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (x) => {
    if (x === undefined) {
      const newSum = sum;

      sum = 0;

      return newSum;
    }
    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
