'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = function(a) {
    if (arguments.length > 0) {
      result += a;

      return adder;
    }

    const sum = result;

    result = 0;

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
