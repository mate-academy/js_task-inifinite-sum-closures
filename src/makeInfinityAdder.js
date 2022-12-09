'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const add = (a) => {
    if (a === undefined) {
      const result = amount;

      amount = 0;

      return result;
    }

    amount += a;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
