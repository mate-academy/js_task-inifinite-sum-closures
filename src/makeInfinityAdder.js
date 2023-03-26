'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function Adder(value) {
    if (arguments.length > 0) {
      count += value;

      return Adder;
    }

    const lastCount = count;

    count = 0;

    return lastCount;
  };
}

module.exports = makeInfinityAdder;
