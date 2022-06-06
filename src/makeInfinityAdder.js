'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const sum = (a) => {
    if (a === undefined) {
      const tmp = total;

      total = 0;

      return tmp;
    }

    total += a;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
