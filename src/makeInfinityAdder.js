'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(param) {
    if (arguments.length === 0) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }

    sum += param;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
