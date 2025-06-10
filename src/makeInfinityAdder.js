'use strict';

/***
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;
  const sum = (a) => {
    if (a === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += a;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
