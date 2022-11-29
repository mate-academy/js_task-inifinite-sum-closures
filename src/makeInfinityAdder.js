'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function add(number) {
    if (number === undefined) {
      const total = sum;

      sum = 0;

      return total;
    }

    sum += number;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
