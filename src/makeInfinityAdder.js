'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const add = (arg) => {
    if (!arg && arg !== 0) {
      const currentTotal = total;

      total = 0;

      return currentTotal;
    }

    total += arg;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
