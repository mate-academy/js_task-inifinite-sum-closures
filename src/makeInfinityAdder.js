'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;
  const adder = (a) => {
    if (a || a === 0) {
      total += a;

      return adder;
    } else if (!a) {
      const result = total;

      total = 0;

      return result;
    }
  };

  return adder;
}
module.exports = makeInfinityAdder;
