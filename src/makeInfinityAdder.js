'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(firstArg) {
  let sum = firstArg || 0;

  function adder(seconfArg) {
    if (seconfArg === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += seconfArg;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
