'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const add = (num) => {
    if (num !== undefined) {
      total += num;

      return add;
    }

    const oldTotal = total;

    total = 0;

    return oldTotal;
  };

  return add;
}

module.exports = makeInfinityAdder;
