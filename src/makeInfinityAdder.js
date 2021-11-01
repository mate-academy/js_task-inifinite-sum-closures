'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (arg) => {
    const tempSum = sum;

    if (arg) {
      sum += arg;

      return adder;
    }

    sum = 0;

    return tempSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
