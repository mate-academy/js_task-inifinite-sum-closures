'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (number) => {
    if (number === undefined) {
      const lastResult = sum;

      sum = 0;

      return lastResult;
    };

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
