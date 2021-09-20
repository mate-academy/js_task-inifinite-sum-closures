'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const calc = (value) => {
    if (value) {
      sum += value;

      return calc;
    };

    const lastSum = sum;

    sum = 0;

    return lastSum;
  };

  return calc;
}

module.exports = makeInfinityAdder;
