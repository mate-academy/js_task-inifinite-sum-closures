'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const add = (...args) => {
    if (args.length === 0) {
      const currentTotal = total;

      total = 0;

      return currentTotal;
    }

    for (const num of args) {
      total += num;
    }

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
