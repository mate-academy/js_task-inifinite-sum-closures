'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const add = (...number) => {
    if (number.length === 0) {
      const currentTotal = total;

      total = 0;

      return currentTotal;
    }

    total += number[0];

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
