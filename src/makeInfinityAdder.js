'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const sum = (num) => {
    const result = amount;

    if (num === undefined) {
      amount = 0;

      return result;
    }

    amount += num;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
