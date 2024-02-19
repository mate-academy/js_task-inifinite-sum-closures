'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(arg) {
  let sum = 0;

  function adder(newArg) {
    if (newArg === undefined) {
      const curentSum = sum;

      sum = 0;

      return curentSum;
    }

    sum += newArg;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
