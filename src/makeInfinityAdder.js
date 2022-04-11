'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;
  let current = 0;

  const sum = (a) => {
    if (a === undefined) {
      current = total;
      total = 0;

      return current;
    }

    total += a;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
