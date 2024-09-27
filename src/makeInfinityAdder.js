'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(argument) {
    if (argument === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += argument;

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
