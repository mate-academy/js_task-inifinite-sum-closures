'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  function adder(i) {
    if (i === undefined) {
      const result = total;

      total = 0;

      return result;
    } else {
      total += i;

      return adder;
    }
  }

  return adder;
}
module.exports = makeInfinityAdder;
