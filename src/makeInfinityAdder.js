'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function adder(value) {
    if (value !== undefined) {
      count += value;

      return adder;
    }

    const lastCount = count;

    count = 0;

    return lastCount;
  };
}

module.exports = makeInfinityAdder;
