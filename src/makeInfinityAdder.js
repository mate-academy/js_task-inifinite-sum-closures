'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const clear = sum;

      sum = 0;

      return clear;
    }

    sum += args.reduce((accum, number) => accum + number, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
