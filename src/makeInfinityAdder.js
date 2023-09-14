'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = function(a) {
    if (arguments.length === 0) {
      const resultCopy = result;

      result = 0;

      return resultCopy;
    }

    result += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
