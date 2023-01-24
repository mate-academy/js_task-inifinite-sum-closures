'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const sum = (num) => {
    if (num === undefined) {
      const result = amount;

      amount = 0;

      return result;
    }

    amount += num;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
