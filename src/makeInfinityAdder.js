'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  function adder(param) {
    if (param !== undefined) {
      total += param;

      return adder;
    } else {
      const anulation = total;

      total = 0;

      return anulation;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
