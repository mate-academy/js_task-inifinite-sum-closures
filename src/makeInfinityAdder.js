'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const qwe = (value) => {
    if (value) {
      sum += value;

      return qwe;
    };

    const lastSum = sum;

    sum = 0;

    return lastSum;
  };

  return qwe;
}

module.exports = makeInfinityAdder;
