'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const amount = [];

  function add(arg) {
    if (arg !== undefined) {
      amount.push(arg);

      return add;
    } else if (amount.length === 0) {
      return 0;
    }

    const result = amount.reduce((a, b) => a + b);

    amount.length = 0;

    return result;
  }

  return add;
}

module.exports = makeInfinityAdder;
