'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const add = (otherElement) => {
    if (otherElement === undefined) {
      const sum = amount;

      amount = 0;

      return sum;
    }

    amount += otherElement;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
