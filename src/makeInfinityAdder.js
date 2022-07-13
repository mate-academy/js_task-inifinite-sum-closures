'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let emptyArgCall = false;

  const addition = function(number) {
    if (arguments.length === 0) {
      if (!emptyArgCall) {
        emptyArgCall = true;

        return sum;
      }
      sum = 0;

      return sum;
    }

    sum += number;

    return addition;
  };

  return addition;
}

module.exports = makeInfinityAdder;
