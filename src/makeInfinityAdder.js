'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(number) {
    if (number === undefined) {
      const a = sum;

      sum = 0;

      return a;
    }

    sum += number;

    return add;
  };
}

module.exports = makeInfinityAdder;
