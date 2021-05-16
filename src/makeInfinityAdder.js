'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = function(a) {
    if (arguments.length === 0) {
      const returnValue = result;

      result = 0;

      return returnValue;
    } else {
      result += a;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
