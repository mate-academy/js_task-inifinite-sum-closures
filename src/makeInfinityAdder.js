'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const add = (value) => {
    if (typeof value === 'undefined') {
      const sum = amount;

      amount = 0;

      return sum;
    }

    amount += value;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
