'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += args.reduce((total, el) => total + el, 0);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
