'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (x) => {
    if (x !== undefined) {
      sum += x;

      return add;
    }

    const total = sum;

    sum = 0;

    return total;
  };

  return add;
}

module.exports = makeInfinityAdder;
