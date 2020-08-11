'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let amount = 0;

  return function add(value) {
    if (value === undefined) {
      const result = amount;

      amount = 0;

      return result;
    } else {
      amount += value;
    }

    return add;
  };
}

module.exports = makeInfinityAdder;
