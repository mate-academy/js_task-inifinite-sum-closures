'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(arg) {
    if (!arg) {
      const copy = sum;

      sum = 0;

      return copy;
    }

    sum = sum + arg;

    return adder;
  };

  return adder;
}
module.exports = makeInfinityAdder;
