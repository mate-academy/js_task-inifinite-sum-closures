'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumArguments = 0;

  function adder(num) {
    if (num === undefined) {
      const sum = sumArguments;

      sumArguments = 0;

      return sum;
    }

    sumArguments += num;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
