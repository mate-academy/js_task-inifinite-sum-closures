'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(argument) {
    if (argument === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }

    if (argument >= 0) {
      sum += argument;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
