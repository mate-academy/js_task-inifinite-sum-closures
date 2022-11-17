'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(number) {
    const bufer = sum;

    if (arguments.length === 0) {
      sum = 0;

      return bufer;
    } else {
      sum += number;

      return add;
    }
  };
}

module.exports = makeInfinityAdder;
