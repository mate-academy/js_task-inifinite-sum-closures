'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let buffer = 0;

  return function adder(value) {
    if (typeof value === 'number') {
      buffer += value;
    } else {
      const sum = buffer;

      buffer = 0;

      return sum;
    }

    return adder;
  };
}

module.exports = makeInfinityAdder;
