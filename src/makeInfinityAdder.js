'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const calculator = (argument) => {
    if (typeof argument !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += argument;

    return calculator;
  };

  return calculator;
}

module.exports = makeInfinityAdder;
