'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let callCount = 0;

  const adder = function(a) {
    if (a !== undefined) {
      callCount += a;

      return adder;
    } else {
      const result = callCount;

      callCount = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
