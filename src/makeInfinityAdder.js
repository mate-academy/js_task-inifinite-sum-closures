'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(value) {
    if (!value && value !== 0) {
      const totalValue = sum;

      sum = 0;

      return totalValue;
    }

    sum += value;

    return add;
  };
}
module.exports = makeInfinityAdder;
