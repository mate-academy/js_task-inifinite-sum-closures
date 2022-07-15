'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const addition = function(number) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return addition;
  };

  return addition;
}

module.exports = makeInfinityAdder;
