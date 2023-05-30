'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const add = (num) => {
    if (typeof num === 'undefined') {
      const currentTotal = total;

      total = 0;

      return currentTotal;
    }

    total += num;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
