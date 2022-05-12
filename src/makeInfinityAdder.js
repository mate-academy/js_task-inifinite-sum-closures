'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return (value) => {
    if (arguments.length === 0) {
      const newSum = sum;

      sum = 0;

      return newSum;
    }

    sum += value;

    return sum;
  };
}

module.exports = makeInfinityAdder;
