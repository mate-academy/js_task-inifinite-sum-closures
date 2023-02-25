'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const add = (value) => {
    if (value === undefined) {
      const sum = total;

      total = 0;

      return sum;
    }

    total += value;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
