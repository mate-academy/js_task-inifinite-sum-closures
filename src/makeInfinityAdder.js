'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(value) {
    if (value === undefined) {
      const sumStorage = sum;

      sum = 0;

      return sumStorage;
    }

    sum += value;

    return adder;
  };
}

module.exports = makeInfinityAdder;
