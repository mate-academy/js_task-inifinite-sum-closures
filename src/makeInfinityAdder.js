'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(argument) {
    if (argument === undefined) {
      const savedSum = sum;

      sum = 0;

      return savedSum;
    }

    sum += argument;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
