'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const add = (x) => {
    const result = amount;

    if (!x) {
      amount = 0;

      return result;
    }
    amount += x;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
