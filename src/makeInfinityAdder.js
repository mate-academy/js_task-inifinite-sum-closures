'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const nextValue = function(n) {
    const amount = result;

    if (n === undefined) {
      result = 0;

      return amount;
    }

    result += n;

    return nextValue;
  };

  return nextValue;
}

module.exports = makeInfinityAdder;
