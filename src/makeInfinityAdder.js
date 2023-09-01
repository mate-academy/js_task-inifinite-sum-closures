'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (arg) => {
    if (arg === undefined) {
      const logSum = sum;

      sum = 0;

      return logSum;
    } else {
      sum += arg;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
