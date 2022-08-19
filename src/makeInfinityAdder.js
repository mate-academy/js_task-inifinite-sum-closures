'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
// write code here
  let amount = 0;

  const add = (a) => {
    if (a !== undefined) {
      amount += a;

      return add;
    }

    const result = amount;

    amount = 0;

    return result;
  };

  return add;
}

module.exports = makeInfinityAdder;
