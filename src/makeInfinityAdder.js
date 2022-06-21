'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const nextValue = function(n) {
    if (n === undefined) {
      const amount = result;

      result = 0;

      return amount;
    }

    result += n;

    return nextValue;
  };

  return nextValue;
}

module.exports = makeInfinityAdder;
